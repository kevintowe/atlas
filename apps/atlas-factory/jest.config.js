module.exports = {
  name: 'atlas-factory',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/atlas-factory',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
