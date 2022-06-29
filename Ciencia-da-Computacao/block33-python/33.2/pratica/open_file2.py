recusStudents = []

with open('arquivo.txt') as gradesFile:
  for line in gradesFile:
    studemt_grade = line
    studemt_grade = studemt_grade.split(" ")
    if int(studemt_grade[1]) < 6:
      recusStudents.append(studemt_grade[0] + "\n")

with open("recusStudents.txt", "w") as recusStudentsFile:
  print(recusStudents)
  recusStudentsFile.writelines(recusStudents)


gradesFile.close()