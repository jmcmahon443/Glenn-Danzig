/**
 * @file index.js
 * Renders VR experience or Editor depending on REACT_APP_ENV value.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Scene, Entity } from 'aframe-react';

require('aframe');
require('./index.css');

// document.createElement("BallA");
// set attributes
// open to the DOM

// generate a cylinder OnClick()

// when user clicks on Root, createElement(cylinder)
// set att

var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive(
  'a-pbr',
  extendDeep({}, meshMixin, {
    // Preset default components. These components and component properties will be attached to the entity out-of-the-box.
    defaultComponents: {
      geometry: { primitive: 'pbr' }
    },

    // Defined mappings from HTML attributes to component properties (using dots as delimiters).
    // If we set `depth="5"` in HTML, then the primitive will automatically set `geometry="depth: 5"`.
    mappings: {
      depth: 'geometry.depth',
      height: 'geometry.height',
      width: 'geometry.width'
    }
  })
);

/**
 * Initial A-Frame Scene.
 * {@inheritdoc}
 */
class InitialScene extends Component {
  state = { color: '#4CC3D9' };

  updateColor() {
    this.setState({
      color: `#${Math.random()
        .toString(16)
        .slice(-6)}`
    });
  }

  render() {
    const { color } = this.state;
    return (
      <Scene
        inspector="url: https://aframe.io/releases/0.6.1/aframe-inspector.min.js"
        cursor="rayOrigin: mouse"
      >
        <Entity
          id="right-light"
          primitive="a-right-light"
          position={{ x: 2, y: 2, z: 3 }}
          type="directional"
          color="#FFF"
          intensity="0.1"
        />
        <Entity
          id="left-light"
          primitive="a-left-light"
          position={{ x: -2, y: 2, z: 3 }}
          type="directional"
          color="#FFF"
          intensity="0.1"
        />
        <Entity
          id="stage"
          primitive="a-box"
          position={{ x: 0, y: 1, z: -6 }}
          rotation={{ x: 0, y: 0, z: 0 }}
          width={5}
          height={2}
          depth={4}
          color="#D3D3D3"
        />
        <Entity
          id="ground"
          primitive="a-plane"
          position={{ x: 0, y: 0, z: -2 }}
          rotation={{ x: -90, y: 0, z: 0 }}
          width={8}
          height={8}
          color="#7BC8A4"
        />
        <Entity primitive="a-sky" color="#4286f4" />
      </Scene>
    );
  }
}

// Render the InitialScene component in the scene container div.
ReactDOM.render(<InitialScene />, document.getElementById('root'));
