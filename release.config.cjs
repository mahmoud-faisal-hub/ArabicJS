const config = {
  branches: ['main', {'name': 'alpha', 'prerelease': true}, {'name': 'beta', 'prerelease': true}],
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "releaseRules": [
        {"type": "docs", "scope":"readme", "release": "patch"},
        {"type": "refactor", "release": "patch"},
        {"type": "style", "release": "patch"}
      ],
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
      }
    }],
    "@semantic-release/release-notes-generator",
    ["@semantic-release/git", {
      "assets": ["dist/**/*.{js,ts}", "dist/**/*.{js,ts}.map", "docs", "package.json", "package-lock.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
}

module.exports = config;