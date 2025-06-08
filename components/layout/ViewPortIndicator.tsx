// 'use client'

// import React, { useEffect, useState, useRef } from 'react'
// import { Settings, X, Eye, EyeOff, RotateCcw, Minimize2 } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Checkbox } from '@/components/ui/checkbox'
// import { Label } from '@/components/ui/label'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { Separator } from '@/components/ui/separator'
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// export default function ViewportIndicator({
//   hideDisplayType: initialHideDisplayType,
//   hideTailwindValues: initialHideTailwindValues,
//   hideBreakpoints: initialHideBreakpoints,
//   hideWidth: initialHideWidth
// }: Readonly<{
//   hideDisplayType?: boolean
//   hideTailwindValues?: boolean
//   hideBreakpoints?: boolean
//   hideWidth?: boolean
// }>) {
//   const [width, setWidth] = useState(0)
//   const [isVisible, setIsVisible] = useState(true)
//   const [showSettings, setShowSettings] = useState(false)
  
//   // Settings state
//   const [hideDisplayType, setHideDisplayType] = useState(initialHideDisplayType || false)
//   const [hideTailwindValues, setHideTailwindValues] = useState(initialHideTailwindValues || false)
//   const [hideBreakpoints, setHideBreakpoints] = useState(initialHideBreakpoints === undefined ? true : initialHideBreakpoints)
//   const [hideWidth, setHideWidth] = useState(initialHideWidth || false)

//   const settingsRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const updateDimensions = () => {
//       setWidth(window.innerWidth)
//     }

//     updateDimensions()
//     window.addEventListener('resize', updateDimensions)
//     return () => window.removeEventListener('resize', updateDimensions)
//   }, [])

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
//         setShowSettings(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const breakpoints = [
//     {
//       name: 'mobile',
//       range: '<640',
//       device: 'phone',
//       className: 'bg-white text-black border-gray-200'
//     },
//     {
//       name: 'sm',
//       range: '640-767',
//       device: 'phone/tablet',
//       className: 'bg-gray-300 text-black border-gray-400'
//     },
//     {
//       name: 'md',
//       range: '768-1023',
//       device: 'tablet',
//       className: 'bg-purple-500 text-white border-purple-600'
//     },
//     {
//       name: 'lg',
//       range: '1024-1279',
//       device: 'laptop',
//       className: 'bg-orange-500 text-white border-orange-600'
//     },
//     {
//       name: 'xl',
//       range: '1280-1535',
//       device: 'desktop',
//       className: 'bg-green-500 text-white border-green-600'
//     },
//     {
//       name: '2xl',
//       range: '1536+',
//       device: 'large screen',
//       className: 'bg-blue-500 text-white border-blue-600'
//     }
//   ]

//   const getPositionClasses = () => {
//     const positions = {
//       'top-left': 'top-4 left-4',
//       'top-right': 'top-4 right-4',
//       'bottom-left': 'bottom-4 left-4',
//       'bottom-right': 'bottom-4 right-4'
//     }
//     return positions['bottom-right']
//   }

//   const getCurrentBreakpoint = () => {
//     return breakpoints.find(bp => {
//       if (bp.name === 'mobile') return width < 640
//       if (bp.name === 'sm') return width >= 640 && width < 768
//       if (bp.name === 'md') return width >= 768 && width < 1024
//       if (bp.name === 'lg') return width >= 1024 && width < 1280
//       if (bp.name === 'xl') return width >= 1280 && width < 1536
//       if (bp.name === '2xl') return width >= 1536
//       return false
//     })
//   }

//   const resetSettings = () => {
//     setHideDisplayType(initialHideDisplayType || false)
//     setHideTailwindValues(initialHideTailwindValues || false)
//     setHideBreakpoints(initialHideBreakpoints === undefined ? true : initialHideBreakpoints)
//     setHideWidth(initialHideWidth || false)
//   }

//   if (!isVisible) {
//     return (
//       <TooltipProvider>
//         <Tooltip>
//           <TooltipTrigger asChild>
//             <Button
//               onClick={() => setIsVisible(true)}
//               size="icon"
//               variant="ghost"
//               className={`fixed bottom-4 right-4 z-50 h-6 w-6 opacity-40 hover:opacity-80 transition-opacity bg-background/50 backdrop-blur-sm`}
//             >
//               <Eye className="h-3 w-3" />
//             </Button>
//           </TooltipTrigger>
//           <TooltipContent>
//             <p className="text-xs">Show viewport</p>
//           </TooltipContent>
//         </Tooltip>
//       </TooltipProvider>
//     )
//   }

//   const currentBp = getCurrentBreakpoint()

//   return (
//     <TooltipProvider>
//       <div className="fixed z-50" style={{ zIndex: 420 }}>
//         {/* Settings Panel */}
//         {showSettings && (
//           <Card
//             ref={settingsRef}
//             className={`fixed w-80 transition-all duration-200 right-4 bottom-16`}
//           >
//             <CardHeader className="pb-3">
//               <div className="flex items-center justify-between">
//                 <CardTitle className="text-sm">Viewport Settings</CardTitle>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="h-6 w-6"
//                   onClick={() => setShowSettings(false)}
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//             </CardHeader>
            
//             <CardContent className="p-4 text-sm">
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="hideTailwindValues"
//                     checked={!hideTailwindValues} // Inverted logic for 'Show X'
//                     onCheckedChange={(v) => setHideTailwindValues(!v)}
//                   />
//                   <Label htmlFor="hideTailwindValues" className="text-xs">
//                     Show Tailwind Screen Size (e.g., sm, md)
//                   </Label>
//                 </div>
//                 <Separator className="my-2" />
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="hideBreakpoints"
//                     checked={!hideBreakpoints} // Inverted logic for 'Show X'
//                     onCheckedChange={(v) => setHideBreakpoints(!v)}
//                   />
//                   <Label htmlFor="hideBreakpoints" className="text-xs">
//                     Show Breakpoint Range (e.g., 640-767)
//                   </Label>
//                 </div>
//                 <Separator className="my-2" />
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="hideWidth"
//                     checked={!hideWidth} // Inverted logic for 'Show X'
//                     onCheckedChange={(v) => setHideWidth(!v)}
//                   />
//                   <Label htmlFor="hideWidth" className="text-xs">
//                     Show Current Width (px)
//                   </Label>
//                 </div>
//                 <Separator className="my-2" />
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="hideDisplayType"
//                     checked={!hideDisplayType} // Inverted logic for 'Show X'
//                     onCheckedChange={(v) => setHideDisplayType(!v)}
//                   />
//                   <Label htmlFor="hideDisplayType" className="text-xs">
//                     Show Device Type (e.g., phone, tablet)
//                   </Label>
//                 </div>
//               </div>
//             </CardContent>
//             <div className="flex space-x-2">
//               <Button
//                 onClick={resetSettings}
//                 variant="outline"
//                 size="sm"
//                 className="flex-1 h-8"
//               >
//                 <RotateCcw className="mr-2 h-3 w-3" />
//                 <span className="text-xs">Reset</span>
//               </Button>
//               <Button
//                 onClick={() => setIsVisible(false)}
//                 variant="destructive"
//                 size="sm"
//                 className="flex-1 h-8"
//               >
//                 <EyeOff className="mr-2 h-3 w-3" />
//                 <span className="text-xs">Hide</span>
//               </Button>
//             </div>
//           </Card>
//         )}

//         {/* Mini Indicator */}
//         <div
//           className={`fixed transition-all duration-200 ${getPositionClasses()} opacity-80`}
//         >
//           <div className="flex items-center space-x-2">
//             {/* Main Display Badge */}
//             <div
//               className={`px-3 py-1 rounded-full text-xs font-mono transition-transform hover:scale-105 ${currentBp?.className || 'bg-gray-500 text-white'}`}
//             >
//               {currentBp ? (
//                 <>
//                   {!hideTailwindValues && <span className='font-semibold'>{currentBp.name}</span>}
//                   {(!hideTailwindValues && !hideBreakpoints) && <span className='opacity-70'>: </span>}
//                   {!hideBreakpoints && <span className='opacity-70'>{currentBp.range}</span>}
                  
//                   {(!hideWidth && (currentBp.name || currentBp.range)) && ' • '}
//                   {!hideWidth && <span>{width}px</span>}
                  
//                   {(!hideDisplayType && (currentBp.name || currentBp.range || !hideWidth)) && ' • '}
//                   {!hideDisplayType && <span className='font-bold'>{currentBp.device}</span>}
                  
//                   {(hideTailwindValues && hideBreakpoints && hideWidth && hideDisplayType) && <span className='opacity-50'>Viewport</span>} {/* Fallback if all are hidden */}
//                 </>
//               ) : 'Loading...'}
//             </div>
            
//             {/* Floating Controls */}
//             <div className="flex items-center space-x-1 opacity-50 hover:opacity-100 transition-opacity">
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     onClick={() => setShowSettings(!showSettings)}
//                     variant="ghost"
//                     size="icon"
//                     className="h-6 w-6 bg-background/60 backdrop-blur-sm hover:bg-background/80"
//                   >
//                     <Settings className="h-3 w-3" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p className="text-xs">Settings</p>
//                 </TooltipContent>
//               </Tooltip>
              
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     onClick={() => setIsVisible(false)}
//                     variant="ghost"
//                     size="icon"
//                     className="h-6 w-6 bg-background/60 backdrop-blur-sm hover:bg-destructive/20"
//                   >
//                     <EyeOff className="h-3 w-3" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p className="text-xs">Hide</p>
//                 </TooltipContent>
//               </Tooltip>
//             </div>
//           </div>
//         </div>
//       </div>
//     </TooltipProvider>
//   )
// }



'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Settings, X, Eye, EyeOff, RotateCcw, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function ViewportIndicator({
  hideDisplayType: initialHideDisplayType,
  hideTailwindValues: initialHideTailwindValues,
  hideBreakpoints: initialHideBreakpoints,
  hideWidth: initialHideWidth
}: Readonly<{
  hideDisplayType?: boolean
  hideTailwindValues?: boolean
  hideBreakpoints?: boolean
  hideWidth?: boolean
}>) {
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  
  // Settings state
  const [hideDisplayType, setHideDisplayType] = useState(initialHideDisplayType || false)
  const [hideTailwindValues, setHideTailwindValues] = useState(initialHideTailwindValues || false)
  const [hideBreakpoints, setHideBreakpoints] = useState(initialHideBreakpoints === undefined ? true : initialHideBreakpoints)
  const [hideWidth, setHideWidth] = useState(initialHideWidth || false)

  const settingsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth)
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const breakpoints = [
    {
      name: 'mobile',
      range: '<640',
      device: 'phone',
      className: 'bg-white text-black border-gray-200'
    },
    {
      name: 'sm',
      range: '640-767',
      device: 'phone/tablet',
      className: 'bg-gray-300 text-black border-gray-400'
    },
    {
      name: 'md',
      range: '768-1023',
      device: 'tablet',
      className: 'bg-purple-500 text-white border-purple-600'
    },
    {
      name: 'lg',
      range: '1024-1279',
      device: 'laptop',
      className: 'bg-orange-500 text-white border-orange-600'
    },
    {
      name: 'xl',
      range: '1280-1535',
      device: 'desktop',
      className: 'bg-green-500 text-white border-green-600'
    },
    {
      name: '2xl',
      range: '1536+',
      device: 'large screen',
      className: 'bg-blue-500 text-white border-blue-600'
    }
  ]

  const getPositionClasses = () => {
    const positions = {
      'top-left': 'top-4 left-4',
      'top-right': 'top-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-right': 'bottom-4 right-4'
    }
    return positions['bottom-right']
  }

  const getCurrentBreakpoint = () => {
    return breakpoints.find(bp => {
      if (bp.name === 'mobile') return width < 640
      if (bp.name === 'sm') return width >= 640 && width < 768
      if (bp.name === 'md') return width >= 768 && width < 1024
      if (bp.name === 'lg') return width >= 1024 && width < 1280
      if (bp.name === 'xl') return width >= 1280 && width < 1536
      if (bp.name === '2xl') return width >= 1536
      return false
    })
  }

  const resetSettings = () => {
    setHideDisplayType(initialHideDisplayType || false)
    setHideTailwindValues(initialHideTailwindValues || false)
    setHideBreakpoints(initialHideBreakpoints === undefined ? true : initialHideBreakpoints)
    setHideWidth(initialHideWidth || false)
  }

  if (!isVisible) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsVisible(true)}
              size="icon"
              variant="ghost"
              className={`fixed bottom-4 right-4 z-50 h-6 w-6 opacity-40 hover:opacity-80 transition-opacity bg-background/50 backdrop-blur-sm`}
            >
              <Eye className="h-3 w-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Show viewport</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  const currentBp = getCurrentBreakpoint()

  return (
    <TooltipProvider>
      <div className="fixed z-50" style={{ zIndex: 420 }}>
        {/* Settings Panel - MADE COMPACT */}
        {showSettings && (
          <Card
            ref={settingsRef}
            className={`fixed w-64 transition-all duration-200 right-4 bottom-16`}
          >
            <CardHeader className="pb-2 pt-3 px-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xs">Viewport Settings</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5"
                  onClick={() => setShowSettings(false)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="px-3 pb-2 text-xs">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hideTailwindValues"
                    checked={!hideTailwindValues}
                    onCheckedChange={(v) => setHideTailwindValues(!v)}
                    className="w-3 h-3"
                  />
                  <Label htmlFor="hideTailwindValues" className="text-xs leading-tight">
                    Show Tailwind Sizes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hideBreakpoints"
                    checked={!hideBreakpoints}
                    onCheckedChange={(v) => setHideBreakpoints(!v)}
                    className="w-3 h-3"
                  />
                  <Label htmlFor="hideBreakpoints" className="text-xs leading-tight">
                    Show Breakpoint Range
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hideWidth"
                    checked={!hideWidth}
                    onCheckedChange={(v) => setHideWidth(!v)}
                    className="w-3 h-3"
                  />
                  <Label htmlFor="hideWidth" className="text-xs leading-tight">
                    Show Current Width
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hideDisplayType"
                    checked={!hideDisplayType}
                    onCheckedChange={(v) => setHideDisplayType(!v)}
                    className="w-3 h-3"
                  />
                  <Label htmlFor="hideDisplayType" className="text-xs leading-tight">
                    Show Device Type
                  </Label>
                </div>
              </div>
              
              <div className="flex space-x-1.5 mt-3 px-1">
                <Button
                  onClick={resetSettings}
                  variant="outline"
                  size="sm"
                  className="flex-1 h-6 text-xs px-2"
                >
                  <RotateCcw className="mr-1 h-2.5 w-2.5" />
                  Reset
                </Button>
                <Button
                  onClick={() => setIsVisible(false)}
                  variant="destructive"
                  size="sm"
                  className="flex-1 h-6 text-xs px-2"
                >
                  <EyeOff className="mr-1 h-2.5 w-2.5" />
                  Hide
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Mini Indicator */}
        <div
          className={`fixed transition-all duration-200 ${getPositionClasses()} opacity-80`}
        >
          <div className="flex items-center space-x-2">
            {/* Main Display Badge */}
            <div
              className={`px-3 py-1 rounded-full text-xs font-mono transition-transform hover:scale-105 ${currentBp?.className || 'bg-gray-500 text-white'}`}
            >
              {currentBp ? (
                <>
                  {!hideTailwindValues && <span className='font-semibold'>{currentBp.name}</span>}
                  {(!hideTailwindValues && !hideBreakpoints) && <span className='opacity-70'>: </span>}
                  {!hideBreakpoints && <span className='opacity-70'>{currentBp.range}</span>}
                  
                  {(!hideWidth && (currentBp.name || currentBp.range)) && ' • '}
                  {!hideWidth && <span>{width}px</span>}
                  
                  {(!hideDisplayType && (currentBp.name || currentBp.range || !hideWidth)) && ' • '}
                  {!hideDisplayType && <span className='font-bold'>{currentBp.device}</span>}
                  
                  {(hideTailwindValues && hideBreakpoints && hideWidth && hideDisplayType) && <span className='opacity-50'>Viewport</span>} {/* Fallback if all are hidden */}
                </>
              ) : 'Loading...'}
            </div>
            
            {/* Floating Controls */}
            <div className="flex items-center space-x-1 opacity-50 hover:opacity-100 transition-opacity">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setShowSettings(!showSettings)}
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 bg-background/60 backdrop-blur-sm hover:bg-background/80"
                  >
                    <Settings className="h-3 w-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Settings</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setIsVisible(false)}
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 bg-background/60 backdrop-blur-sm hover:bg-destructive/20"
                  >
                    <EyeOff className="h-3 w-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Hide</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}