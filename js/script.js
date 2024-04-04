// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates Volume of Pyramid
 */
function calculateVolumeOfPyramid() {
  // input
  const length = parseInt(document.getElementById('length-mm').value)
  const width = parseInt(document.getElementById('width-mm').value)
  const height = parseInt(document.getElementById('height-mm').value)


  // process
  const VolumeOfPyramid = Math.floor((length * width * height) / 3);

  // output
  document.getElementById('volume').innerHTML = 'Volume is ' +  VolumeOfPyramid + ' mm'
}
