full_name="mate"
consonant_count=0
for i in range(0,len(full_name)):
    j=(full_name[i])
    if j == "b" or j == "g" or j == "d" or j == "v" or j== "z" or j== "t" or j=="k" or j=="l" or j == "m" or j =="n" or j == "p" or j== "ჟ" or j =="r" or j=="s"  or j=="ტ"  or j=="f"  or j=="q"  or j== "ღ"  or j=="y"  or j=="sh"  or j=="ch"  or j=="c"  or j== "ძ"  or j=="w"  or j=="x"  or j=="j"  or j== "h":
        consonant_count += 1




print(consonant_count)