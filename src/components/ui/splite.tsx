import React, { useEffect, useRef, useCallback, useState } from 'react'
import { Application } from '@splinetool/runtime'

interface SplineSceneProps {
  scene: string
  className?: string
  style?: React.CSSProperties
  onLoad?: (splineApp: Application) => void
  fullScreenHover?: boolean
  initialZoom?: number
}

export function SplineScene({
  scene,
  className,
  style,
  onLoad,
  fullScreenHover = true,
  initialZoom,
}: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const splineAppRef = useRef<Application | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const updateCameraZoom = useCallback(() => {
    const app = splineAppRef.current as any
    if (!app) return

    try {
      if (initialZoom !== undefined && typeof app.setZoom === 'function') {
        app.setZoom(initialZoom)
        return
      }

      // Automatically compute safe zoom so the 3D model and hands are nicely framed
      const width = typeof window !== 'undefined' ? window.innerWidth : 1200
      let safeZoom = 0.7
      if (width < 480) {
        safeZoom = 0.52
      } else if (width < 768) {
        safeZoom = 0.58
      } else if (width < 1024) {
        safeZoom = 0.64
      } else if (width < 1440) {
        safeZoom = 0.68
      } else {
        safeZoom = 0.72
      }

      if (typeof app.setZoom === 'function') {
        app.setZoom(safeZoom)
      }
    } catch {
      // Ignore zoom adjustment errors
    }
  }, [initialZoom])

  // Initialize and load Spline Application
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let isMounted = true
    setIsLoading(true)
    setHasError(false)

    const app = new Application(canvas)
    splineAppRef.current = app

    app
      .load(scene)
      .then(() => {
        if (!isMounted) {
          app.dispose()
          return
        }

        try {
          const rawApp = app as any
          // 1. Transparent background
          if (rawApp._scene) {
            rawApp._scene.background = null
            rawApp._scene.traverse?.((child: any) => {
              if (
                child &&
                child.name &&
                (child.name.toLowerCase().includes('background') ||
                  child.name.toLowerCase().includes('bg') ||
                  child.name.toLowerCase().includes('backdrop') ||
                  child.name.toLowerCase().includes('plane'))
              ) {
                if (child.type === 'Mesh' && child.geometry?.type?.includes('Plane')) {
                  child.visible = false
                }
              }
            })
          }

          // 2. Set WebGL clear color to 0x000000 with 0 alpha (fully transparent)
          if (rawApp._renderer) {
            rawApp._renderer.setClearColor(0x000000, 0)
            if (typeof rawApp._renderer.setClearAlpha === 'function') {
              rawApp._renderer.setClearAlpha(0)
            }
            if (rawApp._renderer.domElement) {
              rawApp._renderer.domElement.style.background = 'transparent'
              rawApp._renderer.domElement.style.backgroundColor = 'transparent'
              rawApp._renderer.domElement.style.touchAction = 'pan-y'
            }
          }

          if (typeof rawApp.setCanvasColor === 'function') {
            rawApp.setCanvasColor('transparent')
          }
          if (typeof rawApp.setBackgroundColor === 'function') {
            rawApp.setBackgroundColor('transparent')
          }

          // 3. Apply framing zoom
          updateCameraZoom()
        } catch (err) {
          console.warn('Spline transparency initialization note:', err)
        }

        setIsLoading(false)
        if (onLoad) {
          onLoad(app)
        }
      })
      .catch((err) => {
        console.warn('Error loading Spline scene:', err)
        if (isMounted) {
          setIsLoading(false)
          setHasError(true)
        }
      })

    return () => {
      isMounted = false
      try {
        app.dispose()
      } catch {
        // Safe cleanup
      }
      splineAppRef.current = null
    }
  }, [scene, updateCameraZoom, onLoad])

  // Handle window resize zoom adjustment
  useEffect(() => {
    let resizeTimer: any
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        updateCameraZoom()
      }, 100)
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
    }
  }, [updateCameraZoom])

  // Throttled mouse movement for desktop cursor tracking only (never touches)
  useEffect(() => {
    if (!fullScreenHover) return

    // Disable fullScreenHover on touch devices to avoid any interference with scrolling
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice && window.innerWidth < 1024) return

    let rafId: number | null = null

    const handleGlobalPointerMove = (e: PointerEvent) => {
      // Ignore touch inputs completely - let native scrolling handle touch seamlessly
      if (e.pointerType === 'touch') return

      const app = splineAppRef.current as any
      if (!app) return

      const canvas = canvasRef.current || app.canvas || app._renderer?.domElement
      if (!canvas || e.target === canvas) return

      if (rafId !== null) return

      rafId = requestAnimationFrame(() => {
        rafId = null
        try {
          const pointerEvt = new PointerEvent('pointermove', {
            clientX: e.clientX,
            clientY: e.clientY,
            screenX: e.screenX,
            screenY: e.screenY,
            bubbles: true,
            cancelable: false,
            pointerType: 'mouse',
          })
          canvas.dispatchEvent(pointerEvt)
        } catch {
          // Silent fallback
        }
      })
    }

    window.addEventListener('pointermove', handleGlobalPointerMove, { passive: true })

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', handleGlobalPointerMove)
    }
  }, [fullScreenHover])

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[300px] overflow-visible flex items-center justify-center pointer-events-none lg:pointer-events-auto ${className || ''}`}
      style={{
        touchAction: 'pan-y',
        ...style,
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-8 h-8 rounded-full border-2 border-white/80 border-t-transparent animate-spin" />
        </div>
      )}

      {hasError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white/50 text-xs">
          3D visual loaded
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="w-full h-full !bg-transparent block pointer-events-none lg:pointer-events-auto"
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          backgroundColor: 'transparent',
          touchAction: 'pan-y',
        }}
      />
    </div>
  )
}
