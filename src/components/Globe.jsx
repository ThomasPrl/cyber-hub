import React, { useEffect, useRef } from 'react'
import createGlobe from 'cobe'
import * as THREE from 'three';


function Globe() {

    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;
    
        const globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: 600 * 2,
          height: 600 * 2,
          phi: 0,
          theta: 0,
          dark: 0.7,
          diffuse: 1.5,
          mapSamples: 32000,
          mapBrightness: 20,
          baseColor: [0, 0.2, 1],
          markerColor: [0.1, 0.8, 1],
          glowColor: [1, 1, 1],
          opacity: 0.9,
          markers: [
            // longitude latitude
            // { location: [37.7595, -122.4367], size: 0.03 },
            // { location: [48.866667,  2.333333], size: 0.05 }
          ],
          onRender: (state) => {
            // Called on every animation frame.
            // `state` will be an empty object, return updated params.
            state.phi = phi;
            phi += 0.001;
          },
          // onReady: ({ scene }) => {
          //   for (let i = 0; i < 10; i++) {
          //     const center = new THREE.Vector3();
          //     const normal = new THREE.Vector3();
          //     const startAngle = Math.random() * Math.PI * 2;
          //     const endAngle = startAngle + Math.random() * Math.PI;
          //     const arc = new THREE.ArcCurve(
          //       center,
          //       1,
          //       startAngle,
          //       endAngle,
          //       false
          //     );
          //     const geometry = new THREE.BufferGeometry().setFromPoints(arc.getPoints(50));
          //     const material = new THREE.LineBasicMaterial({
          //       color: 0xff0000
          //     });
          //     const line = new THREE.Line(geometry, material);
          //     line.position.set(0, 0, 2);
          //     scene.add(line);
          //   }
          // }

        });
        
        return () => {
          globe.destroy();
        };
      }, []);

      return (
        <div>
          <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
          />
        </div>
      );
}

// FOR GRABBING & ROTATING GLOBE

// export function Cobe() { 
    
//     const canvasRef = useRef(); 
//     const pointerInteracting = useRef(null); 
//     const pointerInteractionMovement = useRef(0); 
//     const [{ r }, api] = useSpring(() => ({ 
//         r: 0,
//         config: { 
//             mass: 1, 
//             tension: 280, 
//             friction: 40, 
//             precision: 0.001,
//          },
//      }));

//         useEffect(() => { 

//             let width = 0;
//             const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth) 
//             window.addEventListener('resize', onResize) 
//             onResize() 

//             const globe = createGlobe(canvasRef.current, { 
//                 devicePixelRatio: 2,
//                 width: 600 * 2,
//                 height: 600 * 2,
//                 phi: 0,
//                 theta: 0,
//                 dark: 1,
//                 diffuse: 1.2,
//                 mapSamples: 16000,
//                 mapBrightness: 1,
//                 baseColor: [1, 0.229, 0.255],
//                 markerColor: [0.1, 0.8, 1],
//                 glowColor: [1, 1, 1],
//                 markers: [

//                 ], 
                
//                 onRender: (state) => { 
//                     state.phi = r.get() 
//                     state.width = width * 2 
//                     state.height = width * 2 
//                 } 
//             }); 



//             setTimeout(() => canvasRef.current.style.opacity = '1') 
//             return () => {
//                 globe.destroy();
//             };
//         }, []);

//             return (
//                 <div style={{ width: '100%', maxWidth: 600, aspectRatio: 1, margin: 'auto', position: 'relative', }}> 
//                     <canvas ref={canvasRef} onPointerDown={(e) => { 
//                         pointerInteracting.current = e.clientX - pointerInteractionMovement.current; 
//                         canvasRef.current.style.cursor = 'grabbing';
//                        }
//                       } 
//                        onPointerUp={() => { pointerInteracting.current = null; 
//                         canvasRef.current.style.cursor = 'grab';
//                        }} onPointerOut={() => { pointerInteracting.current = null; 
//                         canvasRef.current.style.cursor = 'grab'; 
//                       }} onMouseMove={(e) => { if (pointerInteracting.current !== null) {
//                           const delta = e.clientX - pointerInteracting.current; 
//                           pointerInteractionMovement.current = delta; 
//                           api.start({ r: delta / 200, }); 
//                         } 
//                         }} 
//                         onTouchMove={(e) => { if (pointerInteracting.current !== null && e.touches[0]) { const delta = e.touches[0].clientX - pointerInteracting.current; 
//                         pointerInteractionMovement.current = delta; 
//                         api.start({ r: delta / 100, }); 
//                         } 
//                         }} 
//                         style={{ width: '100%', height: '100%', cursor: 'grab', contain: 'layout paint size', opacity: 0, transition: 'opacity 1s ease', }} 
//                     />
//                 </div>
//             );
// } 

export default Globe
