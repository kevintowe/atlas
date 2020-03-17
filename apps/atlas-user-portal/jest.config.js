module.exports = {
  name: 'atlas-user-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/atlas-user-portal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
