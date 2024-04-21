package main

import (
	"runtime/debug"
	"strings"

	"github.com/magicbutton/magic-meetings/magicapp"
	"github.com/magicbutton/magic-meetings/utils"
)

func main() {
	info, _ := debug.ReadBuildInfo()

	// split info.Main.Path by / and get the last element
	s1 := strings.Split(info.Main.Path, "/")
	name := s1[len(s1)-1]
	description := `---
title: magic-meetings
description: Describe the main purpose of this kitchen
---

# magic-meetings
`
	magicapp.Setup(".env")
	magicapp.RegisterServeCmd("magic-meetings", description, "0.0.1", 8080)
	magicapp.RegisterCmds()
	magicapp.RegisterServiceCmd()
	magicapp.RegisterBun()

	utils.RootCmd.PersistentFlags().BoolVarP(&utils.Verbose, "verbose", "v", false, "verbose output")

	magicapp.Execute(name, "magic-meetings", "")
}
