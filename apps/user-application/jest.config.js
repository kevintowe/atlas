module.exports = {
  name: 'user-application',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/user-application',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
