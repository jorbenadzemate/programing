import random
crew_leaders = ['kruashvili', 'amiranashvili', 'tyeshelashvili', 'janezashvili', 'molodini', 'kereselidze', 'kurtanidze']
def j():
     choice1="N1 winner" + random.choice(crew_leaders)
     choice2="N2 winner" + random.choice(crew_leaders)
     choice3="N3 winner" + random.choice(crew_leaders)
     if choice1==choice2 or choice1==choice3 or choice2==choice3:
          print(choice1="N1 winner" + random.choice(crew_leaders))
          print(choice2="N2 winner" + random.choice(crew_leaders))
          print(choice3="N3 winner" + random.choice(crew_leaders))
j()