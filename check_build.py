import sys

def check_log(filename):
    with open(filename, 'r') as f:
        content = f.read()
        if "Compiled successfully" in content and "Failed to type check" not in content and "Error:" not in content:
            print("BUILD SUCCESSFUL")
        else:
            print("BUILD FAILED")
            # Print errors
            for line in content.split('\n'):
                if "Error:" in line or "Type error:" in line:
                    print(line)

if __name__ == "__main__":
    check_log(sys.argv[1])
