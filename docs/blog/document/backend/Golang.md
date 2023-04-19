---
title: Golang
tags:
  - Golang
---
### 判断当前主机是物理机还是虚拟机
windows下命令行获取：
```
wmic path Win32_ComputerSystem get Model
```
linux下命令行获取：
```sh
dmidecode | egrep -i 'system-product-name|product|domU'
```
```go
func isVirtualMachine() (bool, error) {
	model := ""
	var cmd *exec.Cmd

	if runtime.GOOS == "windows" {
		cmd = exec.Command("cmd", "/C", "wmic path Win32_ComputerSystem get Model")
	} else { // linux
		cmd = exec.Command("/bin/bash", "-c", "dmidecode | egrep -i 'system-product-name|product|domU'")
	}

	stdout, err := cmd.Output()

	if err != nil {
		return false, err
	}
	model = string(stdout)

	if strings.Contains(model, "VirtualBox") || strings.Contains(model, "Virtual Machine") || strings.Contains(model, "VMware Virtual Platform") ||
		strings.Contains(model, "KVM") || strings.Contains(model, "Bochs") || strings.Contains(model, "HVM domU") {
		return true, nil
	}

	return false, nil
}
```

参考：  
[https://unix.stackexchange.com/questions/89714/easy-way-to-determine-virtualization-technology](https://unix.stackexchange.com/questions/89714/easy-way-to-determine-virtualization-technology)  
[https://blog.csdn.net/yangzhenping/article/details/49996765?utm_source=blogxgwz1](https://blog.csdn.net/yangzhenping/article/details/49996765?utm_source=blogxgwz1)  
[https://blog.csdn.net/greless/article/details/71107767](https://blog.csdn.net/greless/article/details/71107767)  
[https://stackoverflow.com/questions/34229486/how-to-execute-a-linux-built-in-command-in-golang](https://stackoverflow.com/questions/34229486/how-to-execute-a-linux-built-in-command-in-golang)  
[https://stackoverflow.com/questions/6182369/exec-a-shell-command-in-go](https://stackoverflow.com/questions/6182369/exec-a-shell-command-in-go)  
[https://stackoverflow.com/questions/13008255/how-to-execute-a-simple-windows-command-in-golang](https://stackoverflow.com/questions/13008255/how-to-execute-a-simple-windows-command-in-golang)  
