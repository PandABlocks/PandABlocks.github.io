Search.setIndex({"docnames": ["developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/explanations/decisions/0002-switched-to-pip-skeleton", "developer/how-to/contribute", "developer/how-to/make-release", "developer/how-to/run-container", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "genindex", "index", "user/explanations/docs-structure", "user/how-to/remote", "user/index", "user/reference/api", "user/reference/release_compatibility", "user/tutorials/installation"], "filenames": ["developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/explanations/decisions/0002-switched-to-pip-skeleton.rst", "developer/how-to/contribute.rst", "developer/how-to/make-release.rst", "developer/how-to/run-container.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "genindex.rst", "index.rst", "user/explanations/docs-structure.rst", "user/how-to/remote.rst", "user/index.rst", "user/reference/api.rst", "user/reference/release_compatibility.rst", "user/tutorials/installation.rst"], "titles": ["Architectural Decision Records", "1. Record architecture decisions", "2. Adopt python3-pip-skeleton for project structure", "Contributing to the project", "Make a release", "Run in a container", "Update the tools", "Developer Guide", "Standards", "API Index", "PandABlocks.github.io", "About the documentation", "Updating a PandA via SSH", "User Guide", "API", "Release Compatibility table", "Installation"], "terms": {"we": [0, 1, 2, 3], "major": [0, 12], "adr": [0, 1], "describ": [0, 1], "michael": [0, 1], "nygard": [0, 1], "below": [0, 12, 15], "i": [0, 3, 5, 6, 7, 11, 12, 13, 14, 16], "list": [0, 12], "our": 0, "current": [0, 6, 16], "1": [0, 12, 15], "2": [0, 10, 15], "adopt": 0, "python3": [0, 6, 16], "pip": [0, 6, 16], "skeleton": [0, 6], "project": [0, 1, 6, 7, 10], "structur": [0, 6], "date": [1, 2], "2022": [1, 2], "02": [1, 2], "18": [1, 2], "accept": [1, 2], "need": [1, 5, 11, 12, 16], "made": 1, "thi": [1, 2, 4, 6, 8, 11, 12, 14, 16], "us": [1, 2, 5, 7, 8, 10, 12, 16], "see": [1, 4], "": 1, "articl": 1, "link": [1, 7, 13], "abov": [1, 5, 12], "To": [1, 4, 5, 6, 12], "creat": [1, 4], "new": [1, 3, 4, 12, 13], "copi": [1, 12], "past": 1, "from": [1, 2, 5, 7, 12, 13, 16], "exist": [1, 3, 10, 12, 16], "ones": 1, "should": [2, 3, 12, 16], "follow": [2, 3, 4, 5, 12], "The": [2, 3, 5, 10, 11, 12, 16], "ensur": 2, "consist": [2, 12], "develop": [2, 5, 10], "environ": [2, 3], "packag": 2, "manag": 2, "have": [2, 3, 12], "switch": 2, "modul": [2, 6, 12], "fix": [2, 12], "set": [2, 3], "tool": [2, 7], "can": [2, 3, 10, 12, 16], "pull": [2, 3, 5, 6], "updat": [2, 7, 13], "latest": [2, 5, 6, 12], "techniqu": [2, 6], "As": 2, "mai": 2, "chang": [2, 3, 6, 10], "could": 2, "differ": [2, 11], "lint": 2, "format": 2, "venv": [2, 16], "setup": [2, 6], "ci": 2, "cd": 2, "ar": [3, 11, 12, 15], "most": [3, 11], "welcom": 3, "all": [3, 5], "request": [3, 6], "handl": 3, "through": 3, "github": [3, 4, 5, 6, 12, 16], "also": [3, 7, 13, 16], "pleas": [3, 4, 15], "check": [3, 6], "ani": [3, 6, 12, 16], "befor": 3, "file": [3, 12], "one": [3, 11, 12], "If": [3, 12, 16], "you": [3, 4, 5, 12, 16], "great": 3, "idea": 3, "involv": 3, "big": 3, "ticket": 3, "make": [3, 7, 12], "want": 3, "sure": [3, 12], "don": 3, "t": [3, 11], "spend": 3, "your": [3, 5], "time": 3, "someth": [3, 6], "might": 3, "fit": 3, "scope": 3, "offer": 3, "place": 3, "ask": 3, "question": 3, "share": 3, "open": 3, "end": 3, "obviou": 3, "when": [3, 12], "close": [3, 6], "rais": 3, "instead": [3, 5], "while": [3, 12], "100": 3, "doe": 3, "librari": [3, 13], "bug": [3, 12], "free": 3, "significantli": 3, "reduc": 3, "number": [3, 4, 5, 12, 14], "easili": 3, "caught": 3, "remain": 3, "same": [3, 4], "improv": [3, 11], "contain": [3, 7, 10, 12], "inform": [3, 11], "up": [3, 7], "run": [3, 6, 7, 12], "test": 3, "what": 3, "standard": [3, 7], "document": [3, 7, 8, 13], "checklist": 4, "choos": 4, "pep440": 4, "compliant": 4, "http": [4, 5, 6, 10, 16], "pep": 4, "python": [4, 6], "org": 4, "0440": 4, "go": 4, "page": 4, "draft": 4, "click": 4, "tag": 4, "suppli": 4, "chose": 4, "gener": [4, 6], "note": [4, 13], "review": 4, "edit": [4, 5], "titl": 4, "publish": 4, "push": 4, "main": 4, "branch": 4, "ha": [4, 6, 12, 16], "effect": 4, "except": 4, "get": [4, 5, 7], "option": 4, "A": [5, 12], "panda": [5, 10, 13, 15], "avail": [5, 12], "reistri": 5, "registri": 5, "docker": 5, "ghcr": 5, "io": [5, 16], "pandablock": [5, 12, 16], "dev": [5, 7], "releas": [5, 7, 10, 12, 13, 16], "version": [5, 6, 12, 14, 15], "directori": 5, "repo": [5, 10], "requir": [5, 11, 12, 16], "repo_dir": 5, "vivado": 5, "instal": [5, 10, 12, 13], "vivado_dir": 5, "build": [5, 10, 12], "build_dir": 5, "mount": 5, "volum": 5, "command": [5, 12], "rm": [5, 12], "v": 5, "z": 5, "scratch": 5, "tmp": [5, 12], "xilinx": 5, "bin": [5, 12, 16], "bash": 5, "In": 5, "each": 5, "cp": 5, "config": 5, "exampl": 5, "For": [5, 12], "path": [5, 12, 16], "match": [5, 12], "local": 5, "system": [5, 12], "e": 5, "locat": 5, "fpga": [5, 10, 12], "appropri": [5, 12], "merg": 6, "which": [6, 12, 15], "provid": 6, "mean": [6, 12], "keep": 6, "sync": [6, 12], "between": 6, "multipl": 6, "git": [6, 16], "rebas": 6, "fals": 6, "com": [6, 16], "diamondlightsourc": 6, "conflict": 6, "indic": 6, "an": [6, 12], "area": 6, "where": 6, "more": [6, 11, 13], "detail": [6, 12], "split": [7, 10, 13], "four": [7, 11, 13], "categori": [7, 13], "access": [7, 12, 13], "side": [7, 13], "bar": [7, 13], "tutori": [7, 11], "contribut": [7, 10], "practic": [7, 13], "step": [7, 12, 13], "dai": 7, "task": 7, "architectur": 7, "decis": 7, "record": 7, "why": [7, 13], "technic": [7, 11, 13], "materi": [7, 13], "defin": 8, "repositori": [8, 12], "organis": 10, "hold": 10, "firmwar": [10, 12], "well": 10, "its": [10, 12, 16], "accompani": 10, "server": [10, 12], "rootf": [10, 15], "pandabox": 10, "other": 10, "devic": 10, "sourc": [10, 16], "code": 10, "section": 10, "user": [10, 12], "guid": [10, 11], "back": 10, "found": 10, "webcontrol": [10, 12], "client": 10, "grand": 11, "unifi": 11, "theori": 11, "david": 11, "la": 11, "There": 11, "secret": 11, "understood": 11, "order": 11, "write": [11, 12], "good": 11, "softwar": [11, 16], "isn": 11, "thing": 11, "call": 11, "thei": 11, "how": 11, "refer": [11, 14], "explan": 11, "repres": 11, "purpos": 11, "function": 11, "approach": 11, "creation": 11, "understand": 11, "implic": 11, "help": 11, "often": 11, "immens": 11, "topic": 11, "admin": 12, "interfac": [12, 16], "quickstart_doc": 12, "sometim": 12, "necessari": 12, "onc": 12, "do": 12, "gain": 12, "over": 12, "either": 12, "add": 12, "authorized_kei": 12, "sd": 12, "card": 12, "load": 12, "usb": 12, "It": [12, 16], "possibl": 12, "log": 12, "remot": 12, "perform": 12, "oper": 12, "onli": 12, "singl": 12, "root": 12, "done": 12, "privileg": 12, "break": 12, "so": [12, 16], "care": 12, "first": 12, "after": 12, "reboot": 12, "everyth": 12, "download": 12, "boot": 12, "x": 12, "zip": 12, "unzip": 12, "somewher": 12, "md5sum": 12, "imagefil": 12, "cpio": 12, "gz": 12, "scp": 12, "my_panda_ip": 12, "two": 12, "md5": 12, "sum": 12, "correctli": 12, "within": 12, "find": [12, 15], "scr": 12, "uimag": 12, "devicetre": 12, "dtb": 12, "uinitramf": 12, "v3": 12, "0": [12, 15], "beyond": 12, "now": [12, 16], "come": 12, "power": 12, "cycl": 12, "box": 12, "4": 12, "zpg": 12, "slowfpga": 12, "3": [12, 15, 16], "onward": 12, "shown": 12, "url": 12, "restart": 12, "servic": 12, "them": 12, "later": [12, 16], "were": 12, "subsequ": 12, "would": 12, "fail": 12, "messag": 12, "lib": 12, "python2": 12, "7": 12, "site": 12, "malcolm": 12, "web": 12, "www": 12, "fpga_doc": 12, "alreadi": 12, "seen": 12, "error": 12, "opt": 12, "retri": 12, "succe": 12, "still": 12, "correct": 12, "24vio": 12, "fmc": 12, "right": 12, "ipmi_definit": 12, "accord": 12, "product": 12, "revis": 12, "fmc24v": 12, "under": 12, "folder": 12, "write_eeprom": 12, "ipmi": 12, "definit": 12, "script": 12, "read": 12, "confirm": 12, "content": 12, "typic": 13, "usag": 13, "start": 13, "here": 13, "via": 13, "ssh": 13, "experienc": 13, "about": 13, "work": 13, "wai": 13, "api": 13, "compat": 13, "tabl": 13, "index": 13, "includ": 13, "intern": 14, "__version__": 14, "str": 14, "calcul": 14, "pypa": 14, "setuptools_scm": 14, "show": 15, "togeth": 15, "zpkg": 15, "8": 16, "type": 16, "termin": 16, "recommend": 16, "interfer": 16, "m": 16, "activ": 16, "depend": 16, "featur": 16, "commandlin": 16, "been": 16}, "objects": {"": [[14, 0, 0, "-", "PandABlocks"]], "PandABlocks.PandABlocks": [[14, 1, 1, "", "__version__"]]}, "objtypes": {"0": "py:module", "1": "py:data"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "data", "Python data"]}, "titleterms": {"architectur": [0, 1], "decis": [0, 1, 2], "record": [0, 1], "1": 1, "statu": [1, 2], "context": [1, 2], "consequ": [1, 2], "2": 2, "adopt": 2, "python3": 2, "pip": 2, "skeleton": 2, "project": [2, 3], "structur": [2, 10], "contribut": 3, "issu": 3, "discuss": 3, "code": [3, 8], "coverag": 3, "develop": [3, 7], "guid": [3, 7, 13], "make": 4, "releas": [4, 15], "run": 5, "contain": 5, "start": 5, "updat": [6, 12], "tool": 6, "how": [7, 10, 13], "explan": [7, 13], "refer": [7, 13], "standard": 8, "api": [9, 14], "index": 9, "pandablock": [10, 14], "github": 10, "io": 10, "document": [10, 11], "i": 10, "about": 11, "panda": 12, "via": 12, "ssh": 12, "rootf": 12, "zpkg": 12, "packag": 12, "24v": 12, "eeprom": 12, "user": 13, "tutori": 13, "compat": 15, "tabl": 15, "instal": 16, "check": 16, "your": 16, "version": 16, "python": 16, "creat": 16, "virtual": 16, "environ": 16, "librari": 16}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 60}, "alltitles": {"Architectural Decision Records": [[0, "architectural-decision-records"]], "1. Record architecture decisions": [[1, "record-architecture-decisions"]], "Status": [[1, "status"], [2, "status"]], "Context": [[1, "context"], [2, "context"]], "Decision": [[1, "decision"], [2, "decision"]], "Consequences": [[1, "consequences"], [2, "consequences"]], "2. Adopt python3-pip-skeleton for project structure": [[2, "adopt-python3-pip-skeleton-for-project-structure"]], "Contributing to the project": [[3, "contributing-to-the-project"]], "Issue or Discussion?": [[3, "issue-or-discussion"]], "Code coverage": [[3, "code-coverage"]], "Developer guide": [[3, "developer-guide"]], "Make a release": [[4, "make-a-release"]], "Run in a container": [[5, "run-in-a-container"]], "Starting the container": [[5, "starting-the-container"]], "Update the tools": [[6, "update-the-tools"]], "Developer Guide": [[7, "developer-guide"]], "How-to Guides": [[7, null], [13, null]], "Explanations": [[7, null], [13, null]], "Reference": [[7, null], [13, null]], "Standards": [[8, "standards"]], "Code Standards": [[8, "code-standards"]], "API Index": [[9, "api-index"]], "PandABlocks.github.io": [[10, "pandablocks-github-io"]], "How the documentation is structured": [[10, "how-the-documentation-is-structured"]], "About the documentation": [[11, "about-the-documentation"]], "Updating a PandA via SSH": [[12, "updating-a-panda-via-ssh"]], "Updating the rootfs": [[12, "updating-the-rootfs"]], "Updating zpkg packages": [[12, "updating-zpkg-packages"]], "Update 24V eeprom": [[12, "update-24v-eeprom"]], "User Guide": [[13, "user-guide"]], "Tutorials": [[13, null]], "API": [[14, "module-PandABlocks"]], "PandABlocks": [[14, "pandablocks"]], "Release Compatibility table": [[15, "release-compatibility-table"]], "Installation": [[16, "installation"]], "Check your version of python": [[16, "check-your-version-of-python"]], "Create a virtual environment": [[16, "create-a-virtual-environment"]], "Installing the library": [[16, "installing-the-library"]]}, "indexentries": {"pandablocks": [[14, "module-PandABlocks"]], "pandablocks.__version__ (in module pandablocks)": [[14, "PandABlocks.PandABlocks.__version__"]], "module": [[14, "module-PandABlocks"]]}})