# Playwright JS multiple env with testrail integration

Install packages
```bash
npm i
```

Create env files for QA and DEV 

```.env.qa```
```.env.dev```

How to run the tests in Windows

```bash
$env:ENV="dev"; npx playwright test
```

```bash
$env:ENV="qa"; npx playwright test
``` 

## Testrail configuration
- You need to install python in your pc.
- Install Testrail
```bash
pip install trcli
```
- Push results to the testrail 


- Before pushing the results, check that the generated JUnit report contains the property ID and value. We use a case matcher to match the property with the report and test case ID. 


- The testcase ID must match the ID in Testrail. Only include the original testcase IDs that start with C; IDs starting with T should not be added. Those are Test run generated IDs.
```bash
trcli -y -h "https://INSERT-INSTANCE-NAME.testrail.io" -u "<testrail username>" -p "<testrail password>" --project "<testrail project>" -n "--no" parse_junit --title "<existing testrun name>" --case-matcher "property" --suite-id "<test suite id>" --run-id "<test run id>" -f"./test-results/junit-report.xml"
```

[TestRail CLI README.md](https://github.com/gurock/trcli/blob/main/README.md)
