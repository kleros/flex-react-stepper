import React from 'react'
import PropTypes from 'prop-types'

import './stepper.css'

/**
 * Creates a stepper.
 * @param {array} steps - Names of different steps.
 * @param {number} activeStep - Index of the active step.
 * @param {string} className - Classname of the component.
 * @returns {ReactElement} - Stepper generated
 */
const Stepper = ({ steps, activeStep, className }) => {
  const stepsLines = steps.reduce((r, a) => r.concat(a, false), [])
  stepsLines.pop()
  return (
    <div className={`Stepper ${className}`}>
      {stepsLines.map(
        (step, i) =>
          i % 2 ? (
            <div
              key={i}
              className={`Stepper-line ${
                ++activeStep >= i ? 'Stepper-activeStep' : ''
              }`}
            />
          ) : (
            <div
              key={i}
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
  className: PropTypes.string
}

Stepper.defaultProps = {
  // Modifiers
  className: ''
}

export default Stepper