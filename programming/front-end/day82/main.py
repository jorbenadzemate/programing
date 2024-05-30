acc ={
    "fullname":"mate jorbenadze",
    "mail":"idk@gmail.com",
    "adress":{
        "region":"adjara",
        "city":"batumi"
    },
    "password":"jumberi123"


}


# def manual_items(dict1):
#     items = []

#     for key in dict1:
#         items.append([key, dict1[key]])
    
#     return items

# acc = {
#     "fullname": "Luka Tskhvaradze",
#     "lover": False,
#     "money": True,
# }

# print(manual_items(acc))

# print("fullname","key not found")



def manual_get(key,dictionary,default=None):
    if key in dictionary:
        return dictionary[key]
    else:
        return default

print(manual_get(acc,"password"))