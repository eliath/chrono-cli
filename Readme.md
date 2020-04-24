# chrono-cli

A Unix CLI wrapper around [chrono-node](https://github.com/wanasit/chrono). Converts
natural language dates to RFC3339 format

## Install

1. Clone the repo
2. Run `npm Install`
3. Run `npm link`

## Usage

Running `chrono today` will output the RFC3339 format for today's date


```bash
chrono jan 1 1970
# 1970-01-01T00:00:00.000Z
chrono sept 11 2001 8:46am EST
# 2001-09-11T13:46:00.000Z
```

See [chrono-node](https://github.com/wanasit/chrono) page for detailed behavior
