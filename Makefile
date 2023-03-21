SRC_DIR ?= src
TEST_DIR ?= tests
PKG_MANAGER ?= pnpm
PKG_LOCKFILE ?= pnpm-lock.yaml

TS_SOURCES ?= $(shell find "$(SRC_DIR)" -type f -name '*.ts')

include make/test.mk
include make/build.mk
include make/lint.mk
include make/dev.mk

run: dist/.build node_modules ## Run the program.
	node dist/main.js

clean: ## Clean source directory.
	rm -rf node_modules dist

node_modules: $(PKG_LOCKFILE)
	$(PKG_MANAGER) install

tests/tasm_programs/%:
	mkdir -p $@
	printf '0' >$@/program.exitcode
	printf '1 put' >$@/program.tasm
	printf 'PushIntInstruction<1>\nPutInstruction' >$@/program.refmodel
	printf '1' >$@/program.stdout

.PHONY: clean run