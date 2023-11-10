Search.setIndex({"docnames": ["developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/explanations/decisions/0002-switched-to-pip-skeleton", "developer/how-to/contribute", "developer/how-to/make-release", "developer/how-to/run-container", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "genindex", "index", "user/how-to/remote", "user/index", "user/reference/migration_guide", "user/reference/release_compatibility"], "filenames": ["developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/explanations/decisions/0002-switched-to-pip-skeleton.rst", "developer/how-to/contribute.rst", "developer/how-to/make-release.rst", "developer/how-to/run-container.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "genindex.rst", "index.rst", "user/how-to/remote.rst", "user/index.rst", "user/reference/migration_guide.rst", "user/reference/release_compatibility.rst"], "titles": ["Architectural Decision Records", "1. Record architecture decisions", "2. Adopt python3-pip-skeleton for project structure", "Contributing to the project", "Make a release", "Run in a container", "Update the tools", "Developer Guide", "Standards", "API Index", "PandABlocks.github.io", "Updating a PandA via SSH", "User Guide", "Migration Guide", "Release Compatibility table"], "terms": {"we": [0, 1, 2, 3], "major": [0, 11], "adr": [0, 1], "describ": [0, 1], "michael": [0, 1], "nygard": [0, 1], "below": [0, 11, 14], "i": [0, 3, 5, 6, 7, 11, 12, 13], "list": 0, "our": 0, "current": [0, 6], "1": [0, 11, 14], "2": [0, 10, 12, 14], "adopt": 0, "python3": [0, 6], "pip": [0, 6], "skeleton": [0, 6], "project": [0, 1, 6, 7, 10], "structur": [0, 6], "date": [1, 2], "2022": [1, 2], "02": [1, 2], "18": [1, 2], "accept": [1, 2], "need": [1, 5, 11], "made": 1, "thi": [1, 2, 4, 6, 8, 11], "us": [1, 2, 5, 7, 8, 10, 11], "see": [1, 4], "": 1, "articl": 1, "link": [1, 7, 12], "abov": [1, 5, 11], "To": [1, 4, 5, 6, 11, 13], "creat": [1, 4], "new": [1, 3, 4, 11, 12, 13], "copi": [1, 11], "past": 1, "from": [1, 2, 5, 7, 11, 12, 13], "exist": [1, 3, 10, 11], "ones": 1, "should": [2, 3, 11], "follow": [2, 3, 4, 5, 11, 13], "The": [2, 3, 5, 10, 11, 13], "ensur": 2, "consist": [2, 11], "develop": [2, 5, 10], "environ": [2, 3], "packag": 2, "manag": 2, "have": [2, 3, 11], "switch": 2, "modul": [2, 6, 11], "fix": [2, 11], "set": [2, 3], "tool": [2, 7], "can": [2, 10, 11], "pull": [2, 3, 5, 6], "updat": [2, 7, 12, 13], "latest": [2, 5, 6, 11], "techniqu": [2, 6], "As": 2, "mai": 2, "chang": [2, 3, 6, 10, 13], "could": 2, "differ": 2, "lint": 2, "format": 2, "venv": 2, "setup": [2, 6], "ci": 2, "cd": 2, "issu": 3, "ar": [3, 11, 14], "most": 3, "welcom": 3, "all": [3, 5], "request": [3, 6], "handl": 3, "through": 3, "github": [3, 4, 5, 6, 11], "also": [3, 7, 12], "pleas": [3, 4, 14], "check": [3, 6], "ani": [3, 6, 11], "befor": 3, "file": [3, 11], "one": [3, 11, 13], "If": [3, 11], "you": [3, 4, 5, 11], "great": 3, "idea": 3, "involv": 3, "big": 3, "ticket": 3, "make": [3, 7, 11], "want": 3, "sure": [3, 11], "don": 3, "t": 3, "spend": 3, "your": [3, 5], "time": 3, "someth": [3, 6], "might": 3, "fit": 3, "scope": 3, "while": [3, 11], "100": 3, "doe": 3, "librari": [3, 12], "bug": [3, 11], "free": 3, "significantli": 3, "reduc": 3, "number": [3, 4, 5, 11], "easili": 3, "caught": 3, "remain": 3, "same": [3, 4], "improv": 3, "contain": [3, 7, 10, 11], "inform": [3, 13], "up": [3, 7], "run": [3, 6, 7, 11], "test": 3, "what": 3, "standard": [3, 7], "document": [3, 7, 8, 12], "checklist": 4, "choos": 4, "pep440": 4, "compliant": 4, "http": [4, 5, 6, 10], "pep": 4, "python": [4, 6], "org": 4, "0440": 4, "go": 4, "page": [4, 11], "draft": 4, "click": 4, "tag": 4, "suppli": 4, "chose": 4, "gener": [4, 6], "note": [4, 12], "review": 4, "edit": [4, 5], "titl": 4, "publish": 4, "push": 4, "main": 4, "branch": 4, "ha": [4, 6, 11], "effect": 4, "except": 4, "get": [4, 5, 7], "option": 4, "A": [5, 11], "panda": [5, 10, 12, 13, 14], "avail": [5, 11], "reistri": 5, "registri": 5, "docker": 5, "ghcr": 5, "io": 5, "pandablock": [5, 11, 13], "dev": [5, 7], "releas": [5, 7, 10, 11, 12], "version": [5, 6, 11, 13, 14], "instead": 5, "directori": 5, "repo": [5, 10], "requir": [5, 11], "repo_dir": 5, "vivado": 5, "instal": [5, 10, 11, 12], "vivado_dir": 5, "build": [5, 10, 11], "build_dir": 5, "mount": 5, "volum": 5, "command": [5, 11], "rm": [5, 11], "v": 5, "z": 5, "scratch": 5, "tmp": [5, 11], "xilinx": 5, "bin": [5, 11], "bash": 5, "In": 5, "each": 5, "cp": 5, "config": 5, "exampl": 5, "For": [5, 11], "path": [5, 11], "match": [5, 11], "local": 5, "system": [5, 11, 13], "e": 5, "locat": 5, "fpga": [5, 10, 11, 13], "appropri": [5, 11], "merg": 6, "which": [6, 11, 14], "provid": 6, "mean": [6, 11], "keep": 6, "sync": [6, 11], "between": 6, "multipl": 6, "git": 6, "rebas": 6, "fals": 6, "com": 6, "diamondlightsourc": 6, "conflict": 6, "indic": 6, "an": [6, 11], "area": 6, "where": 6, "close": 6, "more": [6, 12], "detail": [6, 11], "split": [7, 10, 12], "four": [7, 12], "categori": [7, 12], "access": [7, 11, 12], "side": [7, 12], "bar": [7, 12], "tutori": [7, 12], "contribut": [7, 10], "practic": [7, 12], "step": [7, 11, 12, 13], "dai": 7, "task": 7, "architectur": 7, "decis": 7, "record": 7, "why": [7, 12], "technic": [7, 12], "materi": [7, 12], "defin": 8, "repositori": 8, "organis": 10, "hold": 10, "firmwar": [10, 11, 13], "well": 10, "its": [10, 11], "accompani": 10, "server": [10, 11, 13], "rootf": [10, 13, 14], "pandabox": 10, "other": 10, "devic": 10, "sourc": 10, "code": 10, "section": 10, "user": [10, 11], "guid": 10, "back": 10, "found": 10, "webcontrol": [10, 11], "client": 10, "admin": 11, "interfac": 11, "quickstart_doc": 11, "sometim": 11, "necessari": 11, "onc": 11, "do": 11, "gain": 11, "over": 11, "either": 11, "add": 11, "authorized_kei": 11, "sd": 11, "card": 11, "load": 11, "usb": 11, "It": 11, "possibl": 11, "log": 11, "remot": 11, "perform": 11, "oper": 11, "onli": 11, "singl": 11, "root": 11, "done": 11, "privileg": 11, "break": 11, "so": 11, "care": 11, "when": 11, "first": 11, "after": 11, "reboot": 11, "everyth": 11, "download": 11, "boot": 11, "x": 11, "zip": 11, "unzip": 11, "somewher": 11, "md5sum": 11, "imagefil": 11, "cpio": 11, "gz": 11, "scp": 11, "my_panda_ip": 11, "two": 11, "md5": 11, "sum": 11, "correctli": 11, "within": 11, "find": [11, 14], "scr": 11, "uimag": 11, "devicetre": 11, "dtb": 11, "uinitramf": 11, "v3": 11, "0": [11, 12, 14], "beyond": 11, "now": 11, "come": 11, "combin": 11, "power": 11, "cycl": 11, "box": 11, "4": 11, "zpg": 11, "slowfpga": 11, "3": [11, 12, 14], "onward": 11, "restart": 11, "servic": 11, "them": 11, "later": 11, "were": 11, "subsequ": 11, "would": 11, "fail": 11, "messag": 11, "lib": 11, "python2": 11, "7": 11, "site": 11, "malcolm": 11, "web": 11, "www": 11, "fpga_doc": 11, "alreadi": 11, "seen": 11, "error": 11, "opt": 11, "retri": 11, "succe": 11, "still": 11, "correct": 11, "24vio": 11, "fmc": 11, "right": 11, "ipmi_definit": 11, "accord": 11, "product": 11, "revis": 11, "fmc24v": 11, "under": 11, "folder": 11, "write_eeprom": 11, "ipmi": 11, "definit": 11, "write": 11, "script": 11, "read": 11, "confirm": 11, "content": 11, "typic": 12, "usag": 12, "start": 12, "here": [12, 13], "via": [12, 13], "ssh": [12, 13], "experienc": 12, "explan": 12, "work": 12, "wai": 12, "migrat": 12, "compat": 12, "tabl": 12, "index": 12, "includ": 12, "api": [12, 13], "kei": 13, "anoth": 13, "outlin": 13, "changelog": 13, "block": 13, "calc": 13, "remov": 13, "field": 13, "func": 13, "clock": 13, "width": 13, "widthunit": 13, "counter": 13, "outmod": 13, "trigedg": 13, "inenc": 13, "encod": 13, "outenc": 13, "pcap": 13, "sampl": 13, "gatedur": 13, "seq": 13, "health": 13, "canwritenext": 13, "sfp": 13, "dls_eventr": 13, "cplllock": 13, "panda_sync": 13, "err_cnt": 13, "bit9": 13, "bit10": 13, "bit11": 13, "bit12": 13, "bit13": 13, "bit14": 13, "bit15": 13, "bit16": 13, "ext_clock_freq": 13, "extclock": 13, "clocksourc": 13, "show": 14, "togeth": 14, "zpkg": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"architectur": [0, 1], "decis": [0, 1, 2], "record": [0, 1], "1": 1, "statu": [1, 2], "context": [1, 2], "consequ": [1, 2], "2": [2, 13], "adopt": 2, "python3": 2, "pip": 2, "skeleton": 2, "project": [2, 3], "structur": [2, 10], "contribut": 3, "code": [3, 8], "coverag": 3, "develop": [3, 7], "guid": [3, 7, 12, 13], "make": 4, "releas": [4, 14], "run": 5, "contain": 5, "start": 5, "updat": [6, 11], "tool": 6, "how": [7, 10, 12], "explan": 7, "refer": [7, 12], "standard": 8, "api": 9, "index": 9, "pandablock": 10, "github": 10, "io": 10, "document": 10, "i": 10, "panda": 11, "via": 11, "ssh": 11, "rootf": 11, "zpkg": 11, "packag": 11, "24v": 11, "eeprom": 11, "user": 12, "migrat": 13, "0": 13, "3": 13, "compat": 14, "tabl": 14}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 60}, "alltitles": {"Architectural Decision Records": [[0, "architectural-decision-records"]], "1. Record architecture decisions": [[1, "record-architecture-decisions"]], "Status": [[1, "status"], [2, "status"]], "Context": [[1, "context"], [2, "context"]], "Decision": [[1, "decision"], [2, "decision"]], "Consequences": [[1, "consequences"], [2, "consequences"]], "2. Adopt python3-pip-skeleton for project structure": [[2, "adopt-python3-pip-skeleton-for-project-structure"]], "Contributing to the project": [[3, "contributing-to-the-project"]], "Code coverage": [[3, "code-coverage"]], "Developer guide": [[3, "developer-guide"]], "Make a release": [[4, "make-a-release"]], "Run in a container": [[5, "run-in-a-container"]], "Starting the container": [[5, "starting-the-container"]], "Update the tools": [[6, "update-the-tools"]], "Developer Guide": [[7, "developer-guide"]], "How-to Guides": [[7, null], [12, null]], "Explanations": [[7, null]], "Reference": [[7, null], [12, null]], "Standards": [[8, "standards"]], "Code Standards": [[8, "code-standards"]], "API Index": [[9, "api-index"]], "PandABlocks.github.io": [[10, "pandablocks-github-io"]], "How the documentation is structured": [[10, "how-the-documentation-is-structured"]], "Updating a PandA via SSH": [[11, "updating-a-panda-via-ssh"]], "Updating the rootfs": [[11, "updating-the-rootfs"]], "Updating zpkg packages": [[11, "updating-zpkg-packages"]], "Update 24V eeprom": [[11, "update-24v-eeprom"]], "User Guide": [[12, "user-guide"]], "Migration Guide": [[13, "migration-guide"]], "2.0 to 3.0": [[13, "to-3-0"]], "Release Compatibility table": [[14, "release-compatibility-table"]]}, "indexentries": {}})