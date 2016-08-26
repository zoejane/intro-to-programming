import os

def rename_files():
	#(1) get file names from a folder
	file_list = os.listdir("/Users/Zoe/GitHub/intro-to-programming/_src/stage3/prank")
	saved_path = os.getcwd()
	os.chdir("/Users/Zoe/GitHub/intro-to-programming/_src/stage3/prank")
	
	#(2) for each file, rename filename
	for file_name in file_list:
		print("Old Name - "+file_name)
		print("New Name - "+file_name.translate(None, "0123456789"))
		os.rename(file_name, file_name.translate(None,"0123456789"))
	os.chdir(saved_path)
		
rename_files()
