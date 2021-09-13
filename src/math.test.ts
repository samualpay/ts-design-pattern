import {Math} from './math'
describe('test math',()=> {
    let service: Math
    beforeAll(async ()=> {
        service = new Math()
    })
    test('test sum',async()=> {
        const result = service.sum(1,2)
        expect(result).toBe(3)
    })
})