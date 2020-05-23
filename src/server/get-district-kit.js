export const getDistrictKit = function (_districts = []) {

  const all = []
  const multiple = []

  const createDistrict = () => {
    const scenery = {
      backgroundLayers: [
        {
          id: 1,
          blueprints: [],
          tag: 'canvas',
          width: 16000,
          height: 8000,
          depth: 4,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/background/far/above-top.png',
                  width: 1024,
                  height: 367
                }
              ]
            },
            {
              id: 2,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 4,
                  tag: 'img',
                  src: 'images/background/far/top/top.png',
                  width: 1024,
                  height: 260
                },
                {
                  id: 2,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/background/far/top/top-pink-jumbotron-left.png',
                  width: 1024,
                  height: 260
                },
                {
                  id: 3,
                  prevalence: 2,
                  tag: 'img',
                  src: 'images/background/far/top/top-pink-jumbotron-right.png',
                  width: 1024,
                  height: 260
                }
              ]
            },
            {
              id: 3,
              rows: 48,
              variations: [
                {
                  id: 1,
                  prevalence: 3,
                  tag: 'img',
                  src: 'images/background/far/middle/middle.png',
                  width: 1024,
                  height: 134
                },
                {
                  id: 2,
                  prevalence: 2,
                  tag: 'img',
                  src: 'images/background/far/middle/middle-pink-jumbotron-far-left.png',
                  width: 1024,
                  height: 134
                },
                {
                  id: 3,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/background/far/middle/middle-pink-jumbotron-left.png',
                  width: 1024,
                  height: 134
                },
                {
                  id: 4,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/background/far/middle/middle-pink-jumbotron-mid-left.png',
                  width: 1024,
                  height: 134
                },
                {
                  id: 5,
                  prevalence: 2,
                  tag: 'img',
                  src: 'images/background/far/middle/middle-pink-jumbotron-middle.png',
                  width: 1024,
                  height: 134
                },
                {
                  id: 6,
                  prevalence: 2,
                  tag: 'img',
                  src: 'images/background/far/middle/middle-pink-jumbotron-right.png',
                  width: 1024,
                  height: 134
                },
                {
                  id: 7,
                  prevalence: 3,
                  tag: 'img',
                  src: 'images/background/far/middle/middle-blue-jumbotron-left.png',
                  width: 1024,
                  height: 134
                },
                {
                  id: 8,
                  prevalence: 2,
                  tag: 'img',
                  src: 'images/background/far/middle/middle-blue-jumbotron-middle.png',
                  width: 1024,
                  height: 134
                },
                {
                  id: 9,
                  prevalence: 3,
                  tag: 'img',
                  src: 'images/background/far/middle/middle-blue-jumbotron-right.png',
                  width: 1024,
                  height: 134
                }
              ]
            },
            {
              id: 4,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/background/far/bottom.png',
                  width: 1024,
                  height: 673
                }
              ]
            }
          ]
        },
        {
          id: 2,
          blueprints: [],
          y: 7050,
          tag: 'canvas',
          width: 24000,
          height: 8000,
          depth: 2,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  width: 1024,
                  height: 768,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/background/middle.png'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          blueprints: [],
          y: 7232,
          tag: 'canvas',
          width: 32000,
          height: 8000,
          depth: 1,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  width: 1408,
                  height: 768,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/background/near.png'
                }
              ]
            }
          ]
        }
      ],
      foregroundLayers: [
        {
          id: 1,
          blueprints: [],
          x: 0,
          y: 7456,
          width: 32000,
          height: 8000,
          depth: 0.5,
          tag: 'canvas',
          scale: 16,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/lamp/left.png',
                  width: 144,
                  height: 544
                },
                {
                  id: 2,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/lamp/right.png',
                  width: 144,
                  height: 544
                }
              ]
            }
          ]
        },
        {
          id: 2,
          blueprints: [],
          x: 32000,
          y: 7456,
          width: 32000,
          height: 8000,
          depth: 0.5,
          tag: 'canvas',
          scale: 16,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/lamp/left.png',
                  width: 144,
                  height: 544
                },
                {
                  id: 2,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/lamp/right.png',
                  width: 144,
                  height: 544
                }
              ]
            }
          ]
        },
        {
          id: 3,
          blueprints: [],
          x: 0,
          y: 6800,
          width: 32000,
          height: 8000,
          depth: 0.25,
          tag: 'canvas',
          scale: 64,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/up-left.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 2,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/up-right.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 3,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/down-left.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 4,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/down-right.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 5,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/left-up.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 6,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/left-down.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 7,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/right-up.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 8,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/right-down.png',
                  width: 1248,
                  height: 448
                }
              ]
            }
          ]
        },
        {
          id: 4,
          blueprints: [],
          x: 32000,
          y: 6800,
          width: 32000,
          height: 8000,
          depth: 0.25,
          tag: 'canvas',
          scale: 64,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/up-left.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 2,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/up-right.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 3,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/down-left.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 4,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/down-right.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 5,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/left-up.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 6,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/left-down.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 7,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/right-up.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 8,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/right-down.png',
                  width: 1248,
                  height: 448
                }
              ]
            }
          ]
        },
        {
          id: 5,
          blueprints: [],
          x: 64000,
          y: 6800,
          width: 32000,
          height: 8000,
          depth: 0.25,
          tag: 'canvas',
          scale: 64,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/up-left.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 2,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/up-right.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 3,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/down-left.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 4,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/down-right.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 5,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/left-up.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 6,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/left-down.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 7,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/right-up.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 8,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/right-down.png',
                  width: 1248,
                  height: 448
                }
              ]
            }
          ]
        },
        {
          id: 6,
          blueprints: [],
          x: 96000,
          y: 6800,
          width: 32000,
          height: 8000,
          depth: 0.25,
          tag: 'canvas',
          scale: 64,
          sections: [
            {
              id: 1,
              rows: 1,
              variations: [
                {
                  id: 1,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/up-left.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 2,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/up-right.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 3,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/down-left.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 4,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/down-right.png',
                  width: 448,
                  height: 1248
                },
                {
                  id: 5,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/left-up.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 6,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/left-down.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 7,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/right-up.png',
                  width: 1248,
                  height: 448
                },
                {
                  id: 8,
                  prevalence: 1,
                  tag: 'img',
                  src: 'images/foreground/arrow/right-down.png',
                  width: 1248,
                  height: 448
                }
              ]
            }
          ]
        }
      ]
    }
    const defaultDistrict = {
      id: null,
      establishedAt: null,
      type: 'neon',
      name: 'Neon District',
      status: '',
      width: 32000,
      height: 8000,
      grid: null,
      rooms: [],
      characters: [],
      vehicles: [],
      unwelcomes: [],
      scenery
    }
    return Object
      .entries(defaultDistrict)
      .reduce(appendAttribute, {})
  }

  const appendAttribute = (district, [key, value]) => {
    district[key] =
      Array.isArray(value) ? [...value]
      : value && value === 'object' ? {...value}
      : value
    return district
  }

  const createGrid = () => {
    const grid = {}
    let rowCount = -1
    while (rowCount < 8) {
      ++rowCount
      const rowId = getGridIndex(rowCount * 1000)
      const row = grid[rowId] = {}
      let sectionCount = -1
      while (sectionCount < 32) {
        ++sectionCount
        const sectionId = getGridIndex(sectionCount * 1000)
        const section = row[sectionId] = {}
        section.a = []
        section.b = []
      }
    }
    return grid
  }

  const getGridIndex = coordinate => {
    coordinate = Math.round(coordinate)
    coordinate = coordinate.toString()
    const {length} = coordinate
    let zerosToAdd = 5 - length
    let zeros = ''
    while (zerosToAdd > 0) zeros += '0' && --zerosToAdd
    coordinate = zeros + coordinate
    return coordinate.slice(0, 2)
  }

  const assignElementId = component => Object.entries(component).forEach(pair => {
    const [key, value] = pair
    if (key === 'tag') component.elementId = 's' + ++elementId
    else if (Array.isArray(value)) value.forEach(assignElementId)
  })

  const handleLayer = function (layer) {
    const {isForeground} = this || {}
    const {sections} = layer
    const handleSectionWithThis = handleSection.bind({isForeground, layer})
    sections.forEach(handleSectionWithThis)
  }

  const handleSection = function (section) {
    const {isForeground, layer} = this
    const {rows, variations} = section
    const variationOptions = []
    const pushVariationWithThis = pushVariation.bind({variationOptions})
    variations.forEach(pushVariationWithThis)
    pushBlueprints({isForeground, layer, section, rows, variationOptions})
  }

  const pushVariation = function (variation) {
    const {variationOptions} = this
    let {prevalence} = variation
    while (prevalence) variationOptions.push(variation) && --prevalence
  }

  function pushBlueprints(argumentation) {
    const {section} = argumentation
    const {id: sectionId} = section
    argumentation.rowsDrawn = 0
    argumentation.sectionId = sectionId
    startRow(argumentation)
  }

  const startRow = argumentation => {
    const {rowsDrawn, rows} = argumentation
    argumentation.x = 0
    argumentation.rowY = 0
    if (rowsDrawn < rows) pushBlueprint(argumentation)
  }

  const pushBlueprint = argumentation => {
    const {x, layer, variationOptions, sectionId, isForeground} = argumentation
    if (x >= layer.width) return callStartRow(argumentation)
    const index = Math.floor(Math.random() * variationOptions.length)
    const variation = argumentation.variation = variationOptions[index]
    const {id: variationId} = variation
    if (layer.y) layerY = layer.y
    const blueprint = {sectionId, variationId, x, y: layerY}
    layer.blueprints.push(blueprint)
    if (isForeground) handleIsForeground(argumentation)
    argumentation.x += variation.width
    argumentation.rowY = variation.height
    pushBlueprint(argumentation)
  }

  const callStartRow = argumentation => {
    const {rowY} = argumentation
    ++argumentation.rowsDrawn
    layerY += rowY
    startRow(argumentation)
  }

  const handleIsForeground = argumentation => {
    const {layer, variation} = argumentation
    if (layer.id < 3) return argumentation.x += 2000
    const float = Math.random() * (3000 - 1000) + 1000
    const gap = Math.floor(float)
    argumentation.x += gap + variation.width
  }

  const callPushEntity = function (character) {
    const {characters, vehicles} = this
    const {district, vehicleKeys, id: characterId} = character
    const vehiclesInCharacterDistrict = _districts[district].vehicles
    const pushEntityIdWithThis = pushEntityId.bind({
      vehiclesInCharacterDistrict, characters, characterId, vehicles
    })
    vehicleKeys.forEach(pushEntityIdWithThis)
  }

  const pushEntityId = function (key) {
    const {vehiclesInCharacterDistrict, characters, characterId, vehicles} = this
    const vehicleId = vehiclesInCharacterDistrict.find(vehicle => vehicle === key)
    vehicleId && characters.push(characterId)
    vehicleId && vehicles.push(vehicleId)
  }

  const detectRowCollisions = function (rowId) {
    const {grid} = this
    const row = grid[rowId]
    const detectSectionCollisionsWithThis = detectSectionCollisions.bind({...this, row})
    Object.keys(row).forEach(detectSectionCollisionsWithThis)
  }

  const detectSectionCollisions = function (sectionId) {
    const {row, entities} = this
    const section = row[sectionId]
    const entitiesToCompare = section.a
    const comparedEntities = section.b
    comparedEntities.length = 0
    while (entitiesToCompare.length) {
      const entityToCompareId = entitiesToCompare.shift()
      const entityToCompare = entities[entityToCompareId]
      const pushCollisionsWithThis = pushCollisions.bind({...this, entityToCompare})
      comparedEntities.forEach(pushCollisionsWithThis)
      comparedEntities.push(entityToCompare)
    }
    return this
  }

  const pushCollisions = function (comparedEntityId) {
    const {collisions, interactions, entityToCompare, entities} = this
    const {vehiclesA, vehiclesB} = collisions
    const {charactersA, charactersB} = interactions
    const {x, y, width, height, type} = entityToCompare || {}
    const comparedEntity = entities[comparedEntityId]
    const {x: x_, y: y_, width: width_, height: height_, type: type_} = comparedEntity
    const didCollide =
      type === type_ &&
      x < x_ + width_ &&
      x + width > x_ &&
      y < y_ + height_ &&
      y + height > y_
    if (!didCollide) return this
    type === 'vehicle'
      ? vehiclesA.push(entityToCompare) &&
        vehiclesB.push(comparedEntity)
      : charactersA.push(entityToCompare) &&
        charactersB.push(comparedEntity)
    return this
  }

  var districtKit = {

    length: _districts.length,

    create: isMayoral => {
      const district = createDistrict()
      const districtClone = createDistrict()
      const {scenery} = district
      const {backgroundLayers, foregroundLayers} = scenery
      if (!isMayoral) {
        backgroundLayers.forEach(assignElementId)
        foregroundLayers.forEach(assignElementId)
        backgroundLayers.forEach(handleLayer)
        foregroundLayers.forEach(handleLayer.bind({isForeground: true}))
        district.grid = createGrid()
      }
      district.establishedAt = Date.now()
      district.id = _districts.length
      _districts.push(district)
      const {id} = district
      districtKit[id] = districtClone
      districtKit.clone(id)
      districtKit.refreshLength()
      return id
    },

    clone: id => {
      const districtClone = districtKit[id]
      const district = _districts[id]
      for (var property in district) {
        var value = district[property]
        if (typeof value !== 'object' || value === null) {
          districtClone[property] = value
        }
        else if (Array.isArray(value)) {
          districtClone[property].length = 0
          value.forEach(item => districtClone[property].push(item))
        }
        else if (typeof value === 'object' && value !== null) {
          for (var nestedProperty in value) {
            var nestedValue = value[nestedProperty]
            if (typeof nestedValue !== 'object' || nestedValue === null) {
              districtClone[property][nestedProperty] = nestedValue
            }
          }
        }
      }
      districtKit[id] = districtClone
      return districtClone
    },

    cloneMultiple: (...idArrays) => {
      multiple.length = 0
      if (idArrays.length) {
        idArrays.forEach(idArray => {
          if (idArray) {
            idArray.forEach(id => {
              if (id) {
                var districtClone = districtKit.clone(id)
                multiple.push(districtClone)
              }
            })
          }
        })
      }
      return multiple
    },

    cloneAll: () => {
      all.length = 0
      _districts.forEach((unusedItem, id) => {
        var district = districtKit.clone(id)
        all.push(district)
      })
      return all
    },

    refreshLength: () => districtKit.length = _districts.length,

    choose: () => {
      const district = _districts.find(district => {
        const {id, characters} = district
        const {length} = characters
        return id && length < 500
      })
      return district && district.id
    },

    emit: (districtId, socket) => socket.emit('district', _districts[districtId]),

    addToDistrict: (...things) => things.forEach(entity => {
      let {district, type, id: entityId} = entity
      type += 's'
      _districts[district][type].push(entityId)
      districtKit[district][type].push(entityId)
    }),

    checkVehicleKeyMatches: walkers => {
      const characters = []
      const vehicles = []
      const callPushEntityWithThis = callPushEntity.bind({characters, vehicles})
      walkers.forEach(callPushEntityWithThis)
      return {characters, vehicles}
    },

    addToGrid: (entities) => entities.forEach(entity => {
      const {x, y, width, height, district, id} = entity
      const grid = _districts[district].grid
      const xRight = x + width
      const yBottom = y + height
      const rowTop = getGridIndex(y)
      const rowBottom = getGridIndex(yBottom)
      const sectionLeft = getGridIndex(x)
      const sectionRight = getGridIndex(xRight)
      const row = grid[rowTop]
      const section = row && row[sectionLeft]
      section && section.a.push(id)
      if (sectionLeft !== sectionRight) {
        const section = row && row[sectionRight]
        section && section.a.push(id)
      }
      if (rowTop !== rowBottom) {
        const row = grid[rowBottom]
        const section = row && row[sectionLeft]
        section && section.a.push(id)
        if (sectionLeft === sectionRight) return
        const section_ = row && row[sectionRight]
        section_ && section_.a.push(id)
      }
    }),

    detectCollisions: entities => {
      const collisions = {vehiclesA: [], vehiclesB: []}
      const interactions = {charactersA: [], charactersB: []}
      _districts.forEach(district => {
        const {grid} = district
        const detectRowCollisionsWithThis = detectRowCollisions.bind({grid, entities})
        grid && Object.keys(grid).forEach(detectRowCollisionsWithThis)
      })
      return {collisions, interactions}
    }
  }

  let elementId = 0
  let layerY = 0

  return districtKit
}
