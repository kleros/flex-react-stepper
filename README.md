<p align="center">
  <b style="font-size: 32px;">Stepper</b>
</p>

<p align="center">
  <a href="https://travis-ci.org/kleros/flex-stepper"><img src="https://travis-ci.org/kleros/flex-stepper.svg?branch=master" alt="Build Status"></a>
  <a href="https://coveralls.io/github/kleros/flex-stepper?branch=master"><img src="https://coveralls.io/repos/github/kleros/flex-stepper/badge.svg?branch=master" alt="Coverage Status"></a>
  <a href="https://david-dm.org/kleros/flex-stepper"><img src="https://david-dm.org/kleros/flex-stepper.svg" alt="Dependencies"></a>
  <a href="https://david-dm.org/kleros/flex-stepper?type=dev"><img src="https://david-dm.org/kleros/flex-stepper/dev-status.svg" alt="Dev Dependencies"></a>
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with Prettier"></a>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen Friendly"></a>
</p>

# What is This?

It's a react horizantal stepper component.

## Install

To install, run `yarn add flex-stepper` or `npm install flex-stepper`.

## Create Your Stepper

```js
import Stepper from 'flex-stepper'

<Stepper
  steps={[
    'Title',
    'Address PartyB',
    'Payment',
    'Email',
    'Description'
  ]}
  activeStep={1}
/>
```
