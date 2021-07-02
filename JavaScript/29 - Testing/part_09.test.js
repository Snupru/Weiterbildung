"use strict"

const StudentModule = require("./part_09")

describe("StudentModule", () => {
  test("Constructor", () => {
    const s = new StudentModule()
    expect(s.students).not.toBeNull()
  })

  describe("addStudent", () => {

    test("it should add a student", () => {
      const s = new StudentModule()
      s.addStudent("Max Mustermann")
      
      expect(s.students.length).toBe(1)
      expect(s.students).toContain("Max Mustermann")
    })

    test("it should not add a student twice", () => {
      const s = new StudentModule()
      s.addStudent("Max Mustermann")
      s.addStudent("Max Mustermann")
      
      expect(s.students.length).toBe(1)
      expect(s.students).toContain("Max Mustermann")
    })
  })

  describe("removeStudent", () => {

    test("it should remove a student", () => {
      const s = new StudentModule()
      s.addStudent("Max Mustermann")
      
      expect(s.students.length).toBe(1)
      expect(s.students).toContain("Max Mustermann")
      
      s.removeStudent("Max Mustermann");
      expect(s.students.length).toBe(0)
    })

    test("it should not thrown a erro if student is not in list", () => {
      const s = new StudentModule()
      s.addStudent("Max Mueller")
      
      expect(s.students.length).toBe(1)
      expect(s.students).toContain("Max Mueller")

      s.removeStudent("Max Mustermann");
      expect(s.students.length).toBe(1)
    })
  })

})