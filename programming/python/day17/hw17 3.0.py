import random

crew_members=["mate ",'giorgi ','alexi ','giorgi ','nika ','omari ','giorgi']

choice1=random.choice(crew_members)
choice2=random.choice(crew_members)
choice3=random.choice(crew_members) 
if choice1[-1]=="i":
    print(choice1 + "cool" )
if choice2[-1]=="i":
    print(choice2 + "cool")
if choice3[-1]=="i":
    print(choice3 + "cool" )
if choice1[-1]!="i":
    print(choice1 + choice1[-1] )
if choice2[-1]!="i":
    print(choice2 + choice2[-1])
if choice3[-1]!="i":
    print(choice3 + choice3[-1])

