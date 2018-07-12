import React from 'react'
import PropTypes from 'prop-types'

import './stepper.css'

/**
 * Creates a stepper.
 * @param {array} steps - Names of different steps.
 * @param {number} activeStep - Index of the active step.
 * @param {string} className - Classname of the component.
 * @param {string} styleComponent - Style of the component.
 * @param {string} styleStep - Style of the step box.
 * @param {string} styleLine - Style of the line between step boxes.
 * @returns {ReactElement} - Stepper generated
 */
const Stepper = ({ steps, activeStep, className, styleComponent, styleStep, styleLine }) => {
  const stepsLines = steps.reduce((r, a) => r.concat(a, false), [])
  stepsLines.pop()
  return (
    <div style={styleComponent} className={`Stepper ${className}`}>
      {stepsLines.map(
        (step, i) =>
          i % 2 ? (
            <div
              key={i}
              style={styleLine}
              className={`Stepper-line ${
                ++activeStep >= i ? 'Stepper-activeStep' : ''
              }`}
            />
          ) : (
            <div
              key={i}
              style={styleStep}
              className={`Stepper-step ${
                activeStep >= i ? 'Stepper-activeStep' : ''
              }`}
            >
              {step}
            </div>
          )
      )}
    </div>
  )
}

Stepper.propTypes = {
  // State
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,

  // Modifiers
  className: PropTypes.string,
  style: PropTypes.object,
  styleStep: PropTypes.object,
  styleLine: PropTypes.object
}

Stepper.defaultProps = {
  // Modifiers
  className: '',
  style: {},
  styleStep: {},
  styleLine: {}
}

export default Stepper