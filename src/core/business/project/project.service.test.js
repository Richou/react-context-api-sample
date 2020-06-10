import ProjectService from "./project.service";
import { expect } from 'chai'

describe('Project Service Test', () => {
  it('should mapProject correctly', () => {
    const firestoreMock = { collection: () => {} }
    const authenticationMock = { collection: () => {} }
    const projectService = ProjectService(firestoreMock, authenticationMock)

    const mapped = projectService.mapProject([])

    expect(mapped).to.eql([])
  })
})
