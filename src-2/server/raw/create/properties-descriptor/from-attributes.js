module.exports = function createPropertiesDescriptorFromAttributes(
  {_entities, entityType, _indexesByID, $, _}
) {

  const propertiesDescriptor = Object
    .keys(_entities)

    .reduce((propertiesDescriptor, attributeName) => {
      const _attribute = _entities[attributeName]
      const propertyDescriptor = $(_ + 'create/property-descriptor')(
        {_attribute, attributeName, entityType, _indexesByID, $, _}
      )
      return {...propertiesDescriptor, [attributeName]: propertyDescriptor}
    }, {})

  return propertiesDescriptor
}