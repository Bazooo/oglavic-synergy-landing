// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {Math as VRMath, ReactInstance, Surface, Location} from 'react-360-web';
import SimpleRaycaster from 'simple-raycaster';

function init(bundle, parent, options = {}) {
  const crosshair = new Surface(300, 300, Surface.SurfaceShape.Flat);

  const cameraDirection = [0, 0, -1];

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    cursorVisibility: "auto",
    frame: () => {
      const cameraQuat = r360.getCameraQuaternion();
      cameraDirection[0] = 0;
      cameraDirection[1] = 0;
      cameraDirection[2] = -1;
      VRMath.rotateByQuaternion(cameraDirection, cameraQuat);
      const cx = cameraDirection[0];
      const cy = cameraDirection[1];
      const cz = cameraDirection[2];
      const horizAngle = Math.atan2(cx, -cz);
      const vertAngle = Math.asin(cy / Math.sqrt(cx * cx + cy * cy + cz * cz));
      crosshair.setAngle(horizAngle, vertAngle);
    },
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('synergize'),
    r360.getDefaultSurface()
  );

  r360.renderToSurface(
    r360.createRoot('crosshair'),
    crosshair
  );

  r360.renderToLocation(
    r360.createRoot('barista'),
    r360.getDefaultLocation()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('coffee.jpg'));
  r360.controls.clearRaycasters();
  r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
