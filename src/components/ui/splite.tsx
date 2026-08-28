import { useEffect, useRef, useCallback, useState } from 'react'
import Spline from '@splinetool/react-spline'

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (splineApp: any) => void
  fullScreenHover?: boolean
  initialZoom?: number
}

export function SplineScene({ scene, className, onLoad, fullScreenHover = true, initialZoom }: SplineSceneProps) {
  const splineAppRef = useRef<any>(null)

  const updateCameraZoom = useCallback(() => {
    const app = splineAppRef.current
    if (!app) return

    try {
      if (initialZoom !== undefined && typeof app.setZoom === 'function') {
        app.setZoom(initialZoom)
        return
      }

      // Automatically compute safe zoom so the 3D model and its hands are never cropped and nicely sized
      const width = typeof window !== 'undefined' ? window.innerWidth : 1200
      let safeZoom = 0.6
      if (width < 480) {
        safeZoom = 0.44
      } else if (width < 768) {
        safeZoom = 0.49
      } else if (width < 1024) {
        safeZoom = 0.54
      } else if (width < 1440) {
        safeZoom = 0.58
      } else {
        safeZoom = 0.61
      }

      if (typeof app.setZoom === 'function') {
        app.setZoom(safeZoom)
      }
    } catch {
      // Ignore zoom adjustment errors
    }
  }, [initialZoom])

  const handleLoad = (splineApp: any) => {
    splineAppRef.current = splineApp

    try {
      // 1. Remove background from Three.js / Spline scene
      if (splineApp._scene) {
        splineApp._scene.background = null
        splineApp._scene.traverse?.((child: any) => {
          if (
            child &&
            child.name &&
            (child.name.toLowerCase().includes('background') ||
              child.name.toLowerCase().includes('bg') ||
              child.name.toLowerCase().includes('backdrop') ||
              child.name.toLowerCase().includes('plane'))
          ) {
            // Only hide actual background plane objects, keep light and models visible
            if (child.type === 'Mesh' && child.geometry?.type?.includes('Plane')) {
              child.visible = false
            }
          }
        })
      }

      // 2. Set WebGL clear color to 0x000000 with 0 alpha (fully transparent)
      if (splineApp._renderer) {
        splineApp._renderer.setClearColor(0x000000, 0)
        if (typeof splineApp._renderer.setClearAlpha === 'function') {
          splineApp._renderer.setClearAlpha(0)
        }
        if (splineApp._renderer.domElement) {
          splineApp._renderer.domElement.style.background = 'transparent'
          splineApp._renderer.domElement.style.backgroundColor = 'transparent'
        }
      }

      // 3. Clear canvas styling
      if (splineApp.canvas) {
        splineApp.canvas.style.background = 'transparent'
        splineApp.canvas.style.backgroundColor = 'transparent'
      }

      if (typeof splineApp.setCanvasColor === 'function') {
        splineApp.setCanvasColor('transparent')
      }
      if (typeof splineApp.setBackgroundColor === 'function') {
        splineApp.setBackgroundColor('transparent')
      }

      // 4. Apply initial framing zoom so full arms/hands are visible immediately
      updateCameraZoom()
    } catch (err) {
      console.warn('Spline transparency initialization note:', err)
    }

    if (onLoad) {
      onLoad(splineApp)
    }
  }

  // Handle window resize zoom adjustment
  useEffect(() => {
    const handleResize = () => {
      updateCameraZoom()
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [updateCameraZoom])

  // Full-screen hover mouse event forwarding so the robot tracks cursor from anywhere on screen
  useEffect(() => {
    if (!fullScreenHover) return

    const handleGlobalPointerMove = (e: PointerEvent | MouseEvent) => {
      const app = splineAppRef.current
      if (!app) return

      const canvas = app.canvas || app._renderer?.domElement
      if (!canvas) return

      // Avoid re-dispatching if already hovering over canvas directly
      if (e.target === canvas) return

      try {
        const pointerEvt = new PointerEvent('pointermove', {
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
          pointerType: 'mouse',
        })
        canvas.dispatchEvent(pointerEvt)

        const mouseEvt = new MouseEvent('mousemove', {
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
          view: window,
        })
        canvas.dispatchEvent(mouseEvt)
      } catch {
        // Fallback silently
      }
    }

    window.addEventListener('pointermove', handleGlobalPointerMove, { passive: true })
    window.addEventListener('mousemove', handleGlobalPointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove)
      window.removeEventListener('mousemove', handleGlobalPointerMove)
    }
  }, [fullScreenHover])

  const [isLoaded, setIsLoaded] = useState(false)

  const handleSceneLoad = (splineApp: any) => {
    setIsLoaded(true)
    handleLoad(splineApp)
  }

  return (
    <div className="w-full h-full relative [&_canvas]:!bg-transparent [&_canvas]:bg-transparent overflow-visible">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 rounded-full border-2 border-white/80 border-t-transparent animate-spin" />
        </div>
      )}
      <Spline
        scene={scene}
        className={className}
        onLoad={handleSceneLoad}
        style={{ background: 'transparent', backgroundColor: 'transparent', width: '100%', height: '100%' }}
      />
    </div>
  )
}
