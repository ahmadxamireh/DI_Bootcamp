import os

# Base path for directory creation
path = '/Users/crisahmad/Desktop/Bootcamp/DI_Bootcamp_FS'

# Create 12 week folders (W1-W12)
for i in range(1, 13):
    # Check if the week folder exists
    if not os.path.exists(path + f'/W{i}'):
        # Create week folder if it doesn't exist
        os.mkdir(path + f'/W{i}')
        print(f'Folder /W{i} created successfully.')
    else:
        # Print a message if the folder already exists
        print(f'Folder /W{i} already exists.')

        # Create 5 day folders (D1-D5) inside each week
        for j in range(1, 6):
            subpath = path + f'/W{i}/D{j}'
            if not os.path.exists(subpath):
                # Create day folder if it doesn't exist
                os.mkdir(subpath)
                print(f'└ Subfolder /D{j} created successfully.')
            else:
                # Print a message if the folder already exists
                print(f'└ Subfolder /D{j} already exists.')

                # Create ExercisesXP and DailyChallenge folders inside each day
                exercises_path = path + f'/W{i}/D{j}/ExercisesXP'
                daily_challenge_path = path + f'/W{i}/D{j}/DailyChallenge'

                # Create ExercisesXP folder if it doesn't exist
                if not os.path.exists(exercises_path):
                    os.mkdir(exercises_path)
                    print('  └ Subfolder /ExercisesXP created successfully.')
                else:
                    # Print a message if the folder already exists
                    print(f'{'│' if j != 5 else ' '} └ Subfolder /ExercisesXP already exists.')

                # Create DailyChallenge folder if it doesn't exist    
                if not os.path.exists(daily_challenge_path):
                    os.mkdir(daily_challenge_path)
                    print('  └ Subfolder /DailyChallenge created successfully.')
                else:
                    # Print a message if the folder already exists
                    print(f'{'│' if j != 5 else ' '} └ Subfolder /DailyChallenge already exists.')
    print()
