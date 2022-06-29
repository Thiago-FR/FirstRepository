file = open('arquivo.txt', mode='w')

file.write("nome idade\n")
file.write("Thiago 29\n")
file.write("Miguel 33\n")

LINES = ["Alberto 35\n", "Betina 22\n", "Joao 42\n"]

file.writelines(LINES)

file.close()

file = open('arquivo.txt', 'r')
content = file.read()

print(content)

file.close()