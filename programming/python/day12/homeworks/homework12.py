identity="mate jorbenadze"
vowel_count=0
for i in range(0,len(identity)):
    h=(identity[i])
    if h=="a" or h=="e" or h == "i" or h == "o" or h == "u":
        vowel_count+=1
print(vowel_count)