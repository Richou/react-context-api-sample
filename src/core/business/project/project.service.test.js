import ProjectService from './project.service';

describe('Project Service Test', () => {
  const firestoreMock = { collection: () => {} }
  const authenticationMock = { collection: () => {} }
  const projectService = ProjectService(firestoreMock, authenticationMock)

  it('should mapProject without files', () => {
    const project = {
      id: 't2hs68PXertUsmkiyLoj',
      name: 'First Project',
      description: 'This is my first project on this online IDE',
      uid: 'zRQzUwzR3xVHic3i68yfmGUO6G33',
    }

    const mapped = projectService.mapProject(project)

    expect(mapped).toEqual({
      id: 't2hs68PXertUsmkiyLoj',
      name: 'First Project',
      description: 'This is my first project on this online IDE',
      uid: 'zRQzUwzR3xVHic3i68yfmGUO6G33',
      tree: {
        id: 't2hs68PXertUsmkiyLoj',
        module: 'First Project',
        type: 'directory',
        leaf: false,
        children: [],
      }
    })
  })

  it('should mapProject correctly', () => {
    const project = {
      id: 't2hs68PXertUsmkiyLoj',
      name: 'First Project',
      description: 'This is my first project on this online IDE',
      uid: 'zRQzUwzR3xVHic3i68yfmGUO6G33',
      files: [
        { mimeType: 'application/json', content:'', name: 'package.json', id: '8F1ENYk8m9fHUIcUkl0e' },
        { mimeType: 'directory', name: 'src', id: 'Jg738gIlWQNcZ4VDfemX' },
        { parent: 'Jg738gIlWQNcZ4VDfemX', name: 'main.js', content: '', mimeType: 'application/javascript', id: 'fFTGAUUCJzMhlyBRTmAE' },
        { parent: 'Jg738gIlWQNcZ4VDfemX', name: 'App.jsx', content: '', mimeType: 'application/javascript', id: 'gTTGAOICJzMhlyBRTmTZ'},
        { parent: 'Jg738gIlWQNcZ4VDfemX', name: 'app', mimeType: 'directory', id: 'gTTGAFRCJzMhlyBRTmTZ'},
        { parent: 'gTTGAFRCJzMhlyBRTmTZ', name: 'index.jsx', mimeType: 'application/javascript', id: 'gTTGAFRCJzMhlyBRTDFsZ'},
      ],
    }

    const mapped = projectService.mapProject(project)

    expect(mapped).toEqual({
      id: 't2hs68PXertUsmkiyLoj',
      name: 'First Project',
      description: 'This is my first project on this online IDE',
      uid: 'zRQzUwzR3xVHic3i68yfmGUO6G33',
      tree: {
        id: 't2hs68PXertUsmkiyLoj',
        module: 'First Project',
        type: 'directory',
        leaf: false,
        children: [
          {
            id: '8F1ENYk8m9fHUIcUkl0e',
            module: 'package.json',
            type: 'file',
            leaf: true,
            children: [],
          },
          {
            children: [
              {
                id: 'fFTGAUUCJzMhlyBRTmAE',
                module: 'main.js',
                type: 'file',
                leaf: true,
                children: [],
              },
              {
                id: 'gTTGAOICJzMhlyBRTmTZ',
                module: 'App.jsx',
                type: 'file',
                leaf: true,
                children: [],
              },
              {
                id: 'gTTGAFRCJzMhlyBRTmTZ',
                module: 'app',
                type: 'directory',
                leaf: false,
                children: [
                  {
                    id: 'gTTGAFRCJzMhlyBRTDFsZ',
                    module: 'index.jsx',
                    type: 'file',
                    leaf: true,
                    children: [],
                  }
                ]
              }
            ],
            id: 'Jg738gIlWQNcZ4VDfemX',
            module: 'src',
            type: 'directory',
            leaf: false,
          },
        ],
      },
    })
  })
})
