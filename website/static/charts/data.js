window.BENCHMARK_DATA = {
  "lastUpdate": 1734543477935,
  "repoUrl": "https://github.com/microsoft/garnet",
  "entries": {
    "Benchmark": [],
    "Operations.BasicOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945574720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1776.197327341352,
            "unit": "ns",
            "range": "± 14.43344240324183"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1714.2773532867432,
            "unit": "ns",
            "range": "± 16.626402009685627"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1755.2957613627116,
            "unit": "ns",
            "range": "± 15.523237812561376"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733954811939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1712.4180222829184,
            "unit": "ns",
            "range": "± 12.206845696339988"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1738.3866788228354,
            "unit": "ns",
            "range": "± 10.659673709841204"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1744.3733046213786,
            "unit": "ns",
            "range": "± 11.868448837341273"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960450912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1742.3146751948766,
            "unit": "ns",
            "range": "± 14.643238667357215"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1717.4220597585042,
            "unit": "ns",
            "range": "± 17.14101821032713"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1737.5594929915208,
            "unit": "ns",
            "range": "± 7.499362075766501"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037604210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1806.409968694051,
            "unit": "ns",
            "range": "± 14.983791935746245"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1714.293517112732,
            "unit": "ns",
            "range": "± 12.267466275974478"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1703.210502465566,
            "unit": "ns",
            "range": "± 3.3536633049381575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058355908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1722.3625702176776,
            "unit": "ns",
            "range": "± 8.88205106032686"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1739.5425454457602,
            "unit": "ns",
            "range": "± 17.637734771677525"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1733.1600671132405,
            "unit": "ns",
            "range": "± 11.703610735434529"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734074839026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1744.4245071411133,
            "unit": "ns",
            "range": "± 14.051116314302607"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1711.8127201080322,
            "unit": "ns",
            "range": "± 11.077616121492857"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1732.7832218170165,
            "unit": "ns",
            "range": "± 7.171228454183896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114553926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1776.1672275543212,
            "unit": "ns",
            "range": "± 15.185770346536362"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1716.103428777059,
            "unit": "ns",
            "range": "± 11.43883749883835"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1709.5325828552245,
            "unit": "ns",
            "range": "± 11.298065810769423"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123198788,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1745.9569937388103,
            "unit": "ns",
            "range": "± 10.256001891939702"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1716.6228154500325,
            "unit": "ns",
            "range": "± 12.372612954194782"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1718.2450532277426,
            "unit": "ns",
            "range": "± 14.990384295583732"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127146572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1806.093218866984,
            "unit": "ns",
            "range": "± 10.498304190633222"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1709.7218687874931,
            "unit": "ns",
            "range": "± 8.884044220362442"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1701.9026948610942,
            "unit": "ns",
            "range": "± 1.4496544722225282"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734127879802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1794.9232083834136,
            "unit": "ns",
            "range": "± 1.6158573203322764"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1714.1901770273844,
            "unit": "ns",
            "range": "± 12.502661729148592"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1712.5478782653809,
            "unit": "ns",
            "range": "± 11.129449222768672"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132115688,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1738.9017345110576,
            "unit": "ns",
            "range": "± 0.8166079420839153"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1711.8647470474243,
            "unit": "ns",
            "range": "± 16.3114127120929"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1704.615301767985,
            "unit": "ns",
            "range": "± 4.4808539451107805"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133787166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1838.7067304757925,
            "unit": "ns",
            "range": "± 1.1972663349181178"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1705.350602223323,
            "unit": "ns",
            "range": "± 1.339628898980291"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1707.1811314991542,
            "unit": "ns",
            "range": "± 10.760925994243465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377069470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1742.8274733225505,
            "unit": "ns",
            "range": "± 11.344240894878464"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1702.2103301684062,
            "unit": "ns",
            "range": "± 1.6501664888664256"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1707.6484160105388,
            "unit": "ns",
            "range": "± 10.081264083874439"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392535377,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1711.4559816632952,
            "unit": "ns",
            "range": "± 12.607864426183028"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1724.377682549613,
            "unit": "ns",
            "range": "± 19.010293775229435"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1715.5876300811767,
            "unit": "ns",
            "range": "± 15.935865153336614"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483477641,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1745.749378351065,
            "unit": "ns",
            "range": "± 9.750740440939722"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1712.6252302805583,
            "unit": "ns",
            "range": "± 8.77176661389747"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1711.4056073597499,
            "unit": "ns",
            "range": "± 9.342088032454651"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542757179,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1794.763241841243,
            "unit": "ns",
            "range": "± 4.9797086769926615"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1711.1608879906792,
            "unit": "ns",
            "range": "± 13.09606276595352"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1705.6311616897583,
            "unit": "ns",
            "range": "± 7.862389963391544"
          }
        ]
      }
    ],
    "Cluster.ClusterMigrate (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945552933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36289.732121785484,
            "unit": "ns",
            "range": "± 83.59199475833644"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 39928.28927408854,
            "unit": "ns",
            "range": "± 280.6755720804364"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32523.476217416617,
            "unit": "ns",
            "range": "± 19.19711718283477"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31684.77042061942,
            "unit": "ns",
            "range": "± 43.678940936683176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733954792141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37361.82455880301,
            "unit": "ns",
            "range": "± 213.89528765788032"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37790.53765399639,
            "unit": "ns",
            "range": "± 36.74700515441643"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32082.986234224758,
            "unit": "ns",
            "range": "± 184.1797342718395"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31461.178971510668,
            "unit": "ns",
            "range": "± 75.95698351168714"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960438371,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36474.445395914714,
            "unit": "ns",
            "range": "± 347.76374302997556"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 39297.550111897785,
            "unit": "ns",
            "range": "± 355.180125928561"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32294.419372558594,
            "unit": "ns",
            "range": "± 114.7229783713484"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31790.14921061198,
            "unit": "ns",
            "range": "± 203.7091027191942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037596697,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36751.08060913086,
            "unit": "ns",
            "range": "± 337.09281617377184"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37825.4322265625,
            "unit": "ns",
            "range": "± 294.6768439267555"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31850.798082624162,
            "unit": "ns",
            "range": "± 191.4090982828696"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31422.238825480144,
            "unit": "ns",
            "range": "± 43.09286031622145"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058339710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37080.19873046875,
            "unit": "ns",
            "range": "± 21.200744817831897"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37237.69209594726,
            "unit": "ns",
            "range": "± 326.8292697448494"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32876.72181803385,
            "unit": "ns",
            "range": "± 253.39851453922668"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30588.82626778739,
            "unit": "ns",
            "range": "± 74.04231713345257"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734074828060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36503.27585652669,
            "unit": "ns",
            "range": "± 273.5314318572555"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 38238.90620320638,
            "unit": "ns",
            "range": "± 361.4930166069858"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31949.303966815656,
            "unit": "ns",
            "range": "± 120.53878533781115"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31615.33027766301,
            "unit": "ns",
            "range": "± 30.4203067847868"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114523979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36637.207572428386,
            "unit": "ns",
            "range": "± 318.87088153798885"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 38203.963838704425,
            "unit": "ns",
            "range": "± 323.1705911643873"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32183.44205885667,
            "unit": "ns",
            "range": "± 25.86135590444241"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31001.756028395434,
            "unit": "ns",
            "range": "± 72.76971922985352"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123192447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37438.627169095555,
            "unit": "ns",
            "range": "± 114.10920288231766"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 38473.23116830679,
            "unit": "ns",
            "range": "± 82.6203031363953"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31769.176915095402,
            "unit": "ns",
            "range": "± 127.79470515253422"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 32314.86456533579,
            "unit": "ns",
            "range": "± 170.80004217472234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127138486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37070.69805673452,
            "unit": "ns",
            "range": "± 152.26229170307067"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 39259.96441141764,
            "unit": "ns",
            "range": "± 270.18949653912944"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31941.41573486328,
            "unit": "ns",
            "range": "± 307.52245304580424"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30961.838623046875,
            "unit": "ns",
            "range": "± 61.61186583242974"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734127883862,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37227.94042532785,
            "unit": "ns",
            "range": "± 120.61420143923628"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 38023.23437064035,
            "unit": "ns",
            "range": "± 271.58593898414597"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32508.083687918526,
            "unit": "ns",
            "range": "± 223.59081864386414"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31177.31670633952,
            "unit": "ns",
            "range": "± 38.656251347322154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132103727,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37338.74373953683,
            "unit": "ns",
            "range": "± 293.04381386143524"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37663.53348388672,
            "unit": "ns",
            "range": "± 39.57944776276908"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31983.63195292155,
            "unit": "ns",
            "range": "± 112.50602428573582"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31194.646596272785,
            "unit": "ns",
            "range": "± 370.26242408813533"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133771472,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37613.930338541664,
            "unit": "ns",
            "range": "± 418.8719933357611"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 38490.474219689,
            "unit": "ns",
            "range": "± 123.44612133995066"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32035.861694335938,
            "unit": "ns",
            "range": "± 39.08308079870975"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31720.78631591797,
            "unit": "ns",
            "range": "± 252.89197671732765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377052911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 39179.857286725724,
            "unit": "ns",
            "range": "± 242.37608931224173"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 38300.899209158764,
            "unit": "ns",
            "range": "± 223.15595975878216"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31977.768774414064,
            "unit": "ns",
            "range": "± 219.06565145310708"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 32236.072186279296,
            "unit": "ns",
            "range": "± 307.2156856296761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392536472,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36509.882807804985,
            "unit": "ns",
            "range": "± 135.36420571969046"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 38613.486321082484,
            "unit": "ns",
            "range": "± 30.748359824308235"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31816.730875651043,
            "unit": "ns",
            "range": "± 26.26498440492891"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 32021.311589558918,
            "unit": "ns",
            "range": "± 51.16937977104647"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483454672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36752.01412963867,
            "unit": "ns",
            "range": "± 596.2828456472726"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37831.67894199916,
            "unit": "ns",
            "range": "± 525.4810909032065"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31232.199645996094,
            "unit": "ns",
            "range": "± 577.3368447707275"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30953.341561453683,
            "unit": "ns",
            "range": "± 268.2460895079047"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542754110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36826.35182776818,
            "unit": "ns",
            "range": "± 42.30000537469531"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 39447.122619628906,
            "unit": "ns",
            "range": "± 101.90542092303022"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32646.209653727212,
            "unit": "ns",
            "range": "± 208.5691376595103"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 33245.20124104818,
            "unit": "ns",
            "range": "± 241.30174131918943"
          }
        ]
      }
    ],
    "Lua.LuaScripts (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945565297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 193.66585097312927,
            "unit": "ns",
            "range": "± 1.4032993671386589"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 345.468617609569,
            "unit": "ns",
            "range": "± 2.473850250302473"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 618.5519981384277,
            "unit": "ns",
            "range": "± 6.06621820410833"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2968.6666544596355,
            "unit": "ns",
            "range": "± 18.671120424173253"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733954819665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 179.76951920986176,
            "unit": "ns",
            "range": "± 0.967493867942754"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 319.9189979871114,
            "unit": "ns",
            "range": "± 2.220174485778534"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 602.2868664423625,
            "unit": "ns",
            "range": "± 5.135448030929655"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2876.2234130859374,
            "unit": "ns",
            "range": "± 16.80723300533179"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960463202,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 178.07218401772636,
            "unit": "ns",
            "range": "± 0.9577073336526256"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 317.6942486445109,
            "unit": "ns",
            "range": "± 1.6751916805786122"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 611.2062438329061,
            "unit": "ns",
            "range": "± 8.263349683666844"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2909.5501708984375,
            "unit": "ns",
            "range": "± 20.280497203024307"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037615996,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 177.32841302798346,
            "unit": "ns",
            "range": "± 0.5042680816365771"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 318.2381695429484,
            "unit": "ns",
            "range": "± 2.099652228890676"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 603.4227486337934,
            "unit": "ns",
            "range": "± 3.1150963010893777"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2927.5593322753907,
            "unit": "ns",
            "range": "± 28.48369284422944"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058389488,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 199.53142457008363,
            "unit": "ns",
            "range": "± 2.0793628221115243"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 340.764165242513,
            "unit": "ns",
            "range": "± 3.1249152810191547"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 616.6441509383066,
            "unit": "ns",
            "range": "± 6.282155084628434"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 3154.165906016032,
            "unit": "ns",
            "range": "± 20.640771690524762"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734074848798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 188.16842782497406,
            "unit": "ns",
            "range": "± 1.1627745289180045"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 326.4345873514811,
            "unit": "ns",
            "range": "± 2.1844479535344075"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 608.1461450713022,
            "unit": "ns",
            "range": "± 4.987420347546367"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2928.858034133911,
            "unit": "ns",
            "range": "± 20.787703311031482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114556627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 188.91168311926035,
            "unit": "ns",
            "range": "± 1.1533494805322169"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 323.5754240036011,
            "unit": "ns",
            "range": "± 2.6684226704152962"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 596.7557873408,
            "unit": "ns",
            "range": "± 5.067161219452393"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2887.178291593279,
            "unit": "ns",
            "range": "± 28.770134276187093"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123220145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 181.3941502911704,
            "unit": "ns",
            "range": "± 0.9746916379346954"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 322.4740557988485,
            "unit": "ns",
            "range": "± 3.210029259270018"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 609.621857716487,
            "unit": "ns",
            "range": "± 5.098964659596539"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2909.445321146647,
            "unit": "ns",
            "range": "± 14.825702930725434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127156990,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 183.85704694475447,
            "unit": "ns",
            "range": "± 1.2783397039498137"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 349.8680354631864,
            "unit": "ns",
            "range": "± 1.2490840737699522"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 632.9414082254682,
            "unit": "ns",
            "range": "± 4.159123554974964"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2927.6136395772296,
            "unit": "ns",
            "range": "± 20.33788624526231"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734127895033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 195.45456528663635,
            "unit": "ns",
            "range": "± 1.1883694792398487"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 325.1344343821208,
            "unit": "ns",
            "range": "± 2.9626050617084667"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 613.0254242079599,
            "unit": "ns",
            "range": "± 2.960579003038886"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2975.173557281494,
            "unit": "ns",
            "range": "± 29.028883568676413"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132132143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 192.86800336837769,
            "unit": "ns",
            "range": "± 3.002063806150634"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 319.0803663889567,
            "unit": "ns",
            "range": "± 2.342252063255537"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 586.3028335571289,
            "unit": "ns",
            "range": "± 3.0614311566474357"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2935.7509251912434,
            "unit": "ns",
            "range": "± 20.065735061964357"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133800402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 186.86895966529846,
            "unit": "ns",
            "range": "± 1.2007424210328141"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 319.99647317613875,
            "unit": "ns",
            "range": "± 2.651121056139691"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 601.7862464269002,
            "unit": "ns",
            "range": "± 4.868715443178402"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2988.8161781311037,
            "unit": "ns",
            "range": "± 31.704949972279085"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377096278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 196.87415656021662,
            "unit": "ns",
            "range": "± 1.3350588475393401"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 318.8814069112142,
            "unit": "ns",
            "range": "± 2.504869034382355"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 593.6006362097604,
            "unit": "ns",
            "range": "± 6.812451863152205"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2885.6963623591832,
            "unit": "ns",
            "range": "± 18.300529722173614"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392545136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 178.26185645375932,
            "unit": "ns",
            "range": "± 0.8007835887121604"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 324.393086942037,
            "unit": "ns",
            "range": "± 2.7905417736601152"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 626.1162096432278,
            "unit": "ns",
            "range": "± 3.6545645165181324"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 3003.538348061698,
            "unit": "ns",
            "range": "± 25.069325310616264"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483484159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 187.36731851100922,
            "unit": "ns",
            "range": "± 1.4726390175678732"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 296.1976917266846,
            "unit": "ns",
            "range": "± 2.4992526178854035"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 597.3464776357015,
            "unit": "ns",
            "range": "± 5.38884835573616"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2951.162675221761,
            "unit": "ns",
            "range": "± 19.3486378388116"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542780826,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 196.98102869987488,
            "unit": "ns",
            "range": "± 1.128365534732452"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 325.9906171162923,
            "unit": "ns",
            "range": "± 3.6288619101383244"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 588.6994316918509,
            "unit": "ns",
            "range": "± 3.1707405530578447"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2995.6075526646205,
            "unit": "ns",
            "range": "± 18.262235957794285"
          }
        ]
      }
    ],
    "Cluster.ClusterOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945667711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16577.869061279296,
            "unit": "ns",
            "range": "± 161.23438639499892"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15534.583384195963,
            "unit": "ns",
            "range": "± 49.8026837175952"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14793.521170043945,
            "unit": "ns",
            "range": "± 62.767639447118476"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14621.712089029948,
            "unit": "ns",
            "range": "± 83.3733282050117"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 119824.22690836589,
            "unit": "ns",
            "range": "± 180.4814989505221"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20221.04091644287,
            "unit": "ns",
            "range": "± 17.360235997849465"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 21565.112819126673,
            "unit": "ns",
            "range": "± 44.33002984365534"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15776.190465291342,
            "unit": "ns",
            "range": "± 20.87529966353803"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 16923.71325937907,
            "unit": "ns",
            "range": "± 51.28792971085843"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 127596.5756312779,
            "unit": "ns",
            "range": "± 1459.657839708987"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733954951478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16798.463041033065,
            "unit": "ns",
            "range": "± 94.05259202987305"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16671.56492207845,
            "unit": "ns",
            "range": "± 215.74821883362603"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15145.536213175455,
            "unit": "ns",
            "range": "± 99.93626474997322"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 15096.01607622419,
            "unit": "ns",
            "range": "± 34.851867092678994"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 120641.6962890625,
            "unit": "ns",
            "range": "± 392.2090260068685"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20430.449853750375,
            "unit": "ns",
            "range": "± 114.35647800751306"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20590.166221618652,
            "unit": "ns",
            "range": "± 99.72873680383067"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16188.362424214682,
            "unit": "ns",
            "range": "± 72.21200470577233"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15746.34209735577,
            "unit": "ns",
            "range": "± 50.256053391149955"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 129680.34280831473,
            "unit": "ns",
            "range": "± 2043.1509315510007"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960571842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 17015.534388224285,
            "unit": "ns",
            "range": "± 11.102844168338109"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15925.753668648857,
            "unit": "ns",
            "range": "± 16.314564201078564"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14884.878391520182,
            "unit": "ns",
            "range": "± 74.4699454603074"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14797.739634195963,
            "unit": "ns",
            "range": "± 99.27009362657398"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 121003.77856445312,
            "unit": "ns",
            "range": "± 680.7432894991712"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20607.123112269812,
            "unit": "ns",
            "range": "± 33.76393975948858"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20874.468037923176,
            "unit": "ns",
            "range": "± 193.37360502263311"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15968.109306922326,
            "unit": "ns",
            "range": "± 36.12676860797994"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15386.201996939522,
            "unit": "ns",
            "range": "± 8.018046910238889"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 126440.01456392728,
            "unit": "ns",
            "range": "± 199.90225067911362"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037735376,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16647.613425118583,
            "unit": "ns",
            "range": "± 124.79833189876241"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 17259.55165608724,
            "unit": "ns",
            "range": "± 139.5521305495242"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15504.355209350586,
            "unit": "ns",
            "range": "± 50.94027842204274"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14165.097573416573,
            "unit": "ns",
            "range": "± 62.488384314693604"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 116252.1687273298,
            "unit": "ns",
            "range": "± 439.0448727150325"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20276.451939509465,
            "unit": "ns",
            "range": "± 36.063883990911876"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 21260.547382899695,
            "unit": "ns",
            "range": "± 164.64953627991554"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15862.447476704916,
            "unit": "ns",
            "range": "± 6.069058300667018"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15458.458537801107,
            "unit": "ns",
            "range": "± 178.09560602779536"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 127569.15997314453,
            "unit": "ns",
            "range": "± 198.33494710834617"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058472965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16944.799931844074,
            "unit": "ns",
            "range": "± 122.48985141932097"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16838.67613728841,
            "unit": "ns",
            "range": "± 24.29225523973045"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14841.887940724691,
            "unit": "ns",
            "range": "± 62.19284978329759"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14247.270753479004,
            "unit": "ns",
            "range": "± 81.92603099479665"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 120603.15407307942,
            "unit": "ns",
            "range": "± 208.71133110144558"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20691.87039620536,
            "unit": "ns",
            "range": "± 11.527939390667132"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 21184.393310546875,
            "unit": "ns",
            "range": "± 49.83025876718326"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16603.455688476562,
            "unit": "ns",
            "range": "± 105.00677424194942"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15287.142420450846,
            "unit": "ns",
            "range": "± 93.5672910813463"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 130838.31581333706,
            "unit": "ns",
            "range": "± 1364.9767259649486"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734074953034,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16407.50286610921,
            "unit": "ns",
            "range": "± 29.92369584266374"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16739.529428335336,
            "unit": "ns",
            "range": "± 46.300337207686624"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15532.273429870605,
            "unit": "ns",
            "range": "± 25.35993584038347"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14632.91545691857,
            "unit": "ns",
            "range": "± 6.025039048343116"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 121750.34071044922,
            "unit": "ns",
            "range": "± 603.0041512763391"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20504.51822603666,
            "unit": "ns",
            "range": "± 83.80690068695408"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20210.15997924805,
            "unit": "ns",
            "range": "± 147.55082802846027"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16571.953591918944,
            "unit": "ns",
            "range": "± 159.4388475651815"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15983.763723754882,
            "unit": "ns",
            "range": "± 96.90389713030187"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 129383.9963030134,
            "unit": "ns",
            "range": "± 1498.8845427958076"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114653366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16769.494192270133,
            "unit": "ns",
            "range": "± 62.744702631847126"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15988.764310709636,
            "unit": "ns",
            "range": "± 188.43321746216319"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14808.08096430852,
            "unit": "ns",
            "range": "± 21.483312530201875"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13831.978903198242,
            "unit": "ns",
            "range": "± 77.52777236083321"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 119696.9816800631,
            "unit": "ns",
            "range": "± 763.8878430558335"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20705.959853108725,
            "unit": "ns",
            "range": "± 136.3618951251602"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20968.045494666465,
            "unit": "ns",
            "range": "± 27.84878861527714"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16189.846918741861,
            "unit": "ns",
            "range": "± 113.50961507396359"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15899.188659667969,
            "unit": "ns",
            "range": "± 54.952434700723636"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 128040.72814941406,
            "unit": "ns",
            "range": "± 323.3352013302896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123320668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 17518.009663173132,
            "unit": "ns",
            "range": "± 151.89700584131322"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16165.070200602213,
            "unit": "ns",
            "range": "± 20.696259270013446"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15350.534461466472,
            "unit": "ns",
            "range": "± 64.75428282162811"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14171.149561564127,
            "unit": "ns",
            "range": "± 67.10764193762246"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 121339.9064679827,
            "unit": "ns",
            "range": "± 413.3523554774131"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20273.38935546875,
            "unit": "ns",
            "range": "± 143.53534670732583"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 21343.456619262695,
            "unit": "ns",
            "range": "± 196.25661349489067"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16419.566301472983,
            "unit": "ns",
            "range": "± 105.85009600211696"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15599.645420954777,
            "unit": "ns",
            "range": "± 22.160783488911985"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 130269.24496694711,
            "unit": "ns",
            "range": "± 566.5419846429032"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127248926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16742.541959322414,
            "unit": "ns",
            "range": "± 34.632927353400746"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16468.77895711263,
            "unit": "ns",
            "range": "± 156.38504876886972"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15272.544236403246,
            "unit": "ns",
            "range": "± 12.778743729109445"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14433.208396911621,
            "unit": "ns",
            "range": "± 56.02103189748767"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 119912.2297688802,
            "unit": "ns",
            "range": "± 1019.2135657456103"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 21116.802645874024,
            "unit": "ns",
            "range": "± 121.99272152419775"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20831.26954298753,
            "unit": "ns",
            "range": "± 47.52271359989486"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15845.822860717773,
            "unit": "ns",
            "range": "± 14.767308665327914"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15905.49851735433,
            "unit": "ns",
            "range": "± 14.879949965009972"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 131849.07749586838,
            "unit": "ns",
            "range": "± 752.4401264012379"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734127987943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16560.478346604566,
            "unit": "ns",
            "range": "± 26.759814869379234"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15656.204596886268,
            "unit": "ns",
            "range": "± 26.246534489830985"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14699.5243737357,
            "unit": "ns",
            "range": "± 47.93090324170255"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14472.590346272786,
            "unit": "ns",
            "range": "± 69.62856975266585"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 120724.36639404297,
            "unit": "ns",
            "range": "± 849.3161950329622"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20900.177844238282,
            "unit": "ns",
            "range": "± 217.26485929957107"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20812.746927897137,
            "unit": "ns",
            "range": "± 25.291746986929244"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16286.266728327824,
            "unit": "ns",
            "range": "± 15.866544114047736"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15609.12010544997,
            "unit": "ns",
            "range": "± 63.28971166418363"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 126999.07017299107,
            "unit": "ns",
            "range": "± 244.64970193821728"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132246719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 17212.375474196215,
            "unit": "ns",
            "range": "± 49.071411174230235"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16134.582185872396,
            "unit": "ns",
            "range": "± 112.70600651627382"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14882.68755558559,
            "unit": "ns",
            "range": "± 62.80487549789008"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14790.627426147461,
            "unit": "ns",
            "range": "± 88.90035109052052"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 119044.85867745536,
            "unit": "ns",
            "range": "± 616.2123793128663"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 21460.63889639718,
            "unit": "ns",
            "range": "± 65.42098123892836"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20309.519933064777,
            "unit": "ns",
            "range": "± 19.956731584647493"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16365.836064656576,
            "unit": "ns",
            "range": "± 9.359226229214045"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15263.848024808443,
            "unit": "ns",
            "range": "± 13.09868012922954"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 127786.15004185268,
            "unit": "ns",
            "range": "± 237.20222276503486"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133916453,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16781.729108683267,
            "unit": "ns",
            "range": "± 140.7997647568151"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16605.741839090984,
            "unit": "ns",
            "range": "± 22.381729225434356"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15013.822847638812,
            "unit": "ns",
            "range": "± 44.16848960805305"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14474.200415978064,
            "unit": "ns",
            "range": "± 34.08233617331236"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 119646.03541666667,
            "unit": "ns",
            "range": "± 623.0336263921758"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20627.844236101424,
            "unit": "ns",
            "range": "± 121.32577014196966"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20780.62504272461,
            "unit": "ns",
            "range": "± 153.19167528971047"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16024.565704345703,
            "unit": "ns",
            "range": "± 11.666675769452091"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15352.878490193685,
            "unit": "ns",
            "range": "± 84.20212686854377"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 137206.50200007512,
            "unit": "ns",
            "range": "± 230.49766721462964"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377185586,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16605.929480919473,
            "unit": "ns",
            "range": "± 16.305168203251316"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15985.116157023112,
            "unit": "ns",
            "range": "± 127.60185154089892"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14689.919949122837,
            "unit": "ns",
            "range": "± 36.259172505522805"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14283.551898956299,
            "unit": "ns",
            "range": "± 22.55934082471965"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 118415.3323538644,
            "unit": "ns",
            "range": "± 373.58586630269156"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 21087.14201237605,
            "unit": "ns",
            "range": "± 28.133333633652278"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 21388.959998575847,
            "unit": "ns",
            "range": "± 171.33631175792044"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16030.088145329402,
            "unit": "ns",
            "range": "± 44.244003135275875"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15974.379475184849,
            "unit": "ns",
            "range": "± 138.4999873013501"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 126798.00336162861,
            "unit": "ns",
            "range": "± 573.6263606950937"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392650325,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16872.70101216634,
            "unit": "ns",
            "range": "± 146.2341152529107"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16452.92595214844,
            "unit": "ns",
            "range": "± 223.62476503505977"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14973.760173543295,
            "unit": "ns",
            "range": "± 74.00951169011351"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14166.524924645057,
            "unit": "ns",
            "range": "± 34.720015411717185"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 119941.42650428184,
            "unit": "ns",
            "range": "± 343.99553098414293"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20840.1876173753,
            "unit": "ns",
            "range": "± 90.6291240251401"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 21325.535894775392,
            "unit": "ns",
            "range": "± 128.8974175241454"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15916.391396155725,
            "unit": "ns",
            "range": "± 25.901550651369107"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15487.00511271159,
            "unit": "ns",
            "range": "± 171.1072178400078"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 130180.44980875652,
            "unit": "ns",
            "range": "± 162.40992576525693"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483575756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16547.024384562174,
            "unit": "ns",
            "range": "± 150.8776653604218"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16314.112971379207,
            "unit": "ns",
            "range": "± 68.89687489975864"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14630.46044667562,
            "unit": "ns",
            "range": "± 33.60814247043058"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14318.008284348707,
            "unit": "ns",
            "range": "± 42.71443140992546"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 120004.23540039062,
            "unit": "ns",
            "range": "± 755.5270413318493"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20699.46054513114,
            "unit": "ns",
            "range": "± 153.54949151509862"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20716.386010976938,
            "unit": "ns",
            "range": "± 47.909182343174464"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16608.672450764974,
            "unit": "ns",
            "range": "± 132.68481879285326"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15133.590818132672,
            "unit": "ns",
            "range": "± 29.26239209577047"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 131319.67342122397,
            "unit": "ns",
            "range": "± 284.47064851784734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542871691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16465.60978262765,
            "unit": "ns",
            "range": "± 122.77629023126661"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 16023.262613932291,
            "unit": "ns",
            "range": "± 13.41958092390434"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14990.591485159737,
            "unit": "ns",
            "range": "± 67.46202830501586"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14333.771660940987,
            "unit": "ns",
            "range": "± 60.419103032153224"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 118465.32001201923,
            "unit": "ns",
            "range": "± 188.8687616929006"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20082.035940987724,
            "unit": "ns",
            "range": "± 36.34121883850274"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 21014.33911895752,
            "unit": "ns",
            "range": "± 34.34537422595519"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16274.60555521647,
            "unit": "ns",
            "range": "± 195.93796881802268"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 16063.225570678711,
            "unit": "ns",
            "range": "± 91.22811293525955"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 127549.1146850586,
            "unit": "ns",
            "range": "± 96.36570878245071"
          }
        ]
      }
    ],
    "Lua.LuaScripts (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945593350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 118.94960220043475,
            "unit": "ns",
            "range": "± 0.5506268557624937"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 196.96039472307478,
            "unit": "ns",
            "range": "± 1.847880626516076"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 338.9589309692383,
            "unit": "ns",
            "range": "± 1.3672840053709572"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2177.157504741962,
            "unit": "ns",
            "range": "± 5.719918682476675"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733954952114,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 118.7998129771306,
            "unit": "ns",
            "range": "± 0.21908129056803408"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 197.72530873616537,
            "unit": "ns",
            "range": "± 0.7294867494106906"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 348.9277805600847,
            "unit": "ns",
            "range": "± 1.383211976520477"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2300.2125040690103,
            "unit": "ns",
            "range": "± 7.630543276907122"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960574101,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 119.14459807532174,
            "unit": "ns",
            "range": "± 0.3660769381254266"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 199.2306879588536,
            "unit": "ns",
            "range": "± 0.5518417003601191"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 375.7016086578369,
            "unit": "ns",
            "range": "± 1.6975957132018156"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2232.765680948893,
            "unit": "ns",
            "range": "± 5.105933284802233"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037659462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 119.03251684629001,
            "unit": "ns",
            "range": "± 0.34285699310425927"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 195.39373837984525,
            "unit": "ns",
            "range": "± 0.3169037884462412"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 345.68349633898055,
            "unit": "ns",
            "range": "± 1.7389724438888132"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2297.857460608849,
            "unit": "ns",
            "range": "± 17.781840282795734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058427158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 119.74014895302909,
            "unit": "ns",
            "range": "± 0.45041522118550353"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 197.5832462310791,
            "unit": "ns",
            "range": "± 1.0200458228299951"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 380.48488934834796,
            "unit": "ns",
            "range": "± 1.506920265920848"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2260.3265322171724,
            "unit": "ns",
            "range": "± 3.6334205329863405"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734074900993,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 118.91997030803135,
            "unit": "ns",
            "range": "± 0.20277037390447447"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 198.0091997555324,
            "unit": "ns",
            "range": "± 0.5610556993055554"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 368.3410867055257,
            "unit": "ns",
            "range": "± 1.5830210027680114"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2207.8350830078125,
            "unit": "ns",
            "range": "± 6.548283732583232"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114611615,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 119.74222489765712,
            "unit": "ns",
            "range": "± 0.5490570349186782"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 237.26182324545724,
            "unit": "ns",
            "range": "± 0.6595858054264361"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 334.62127538827747,
            "unit": "ns",
            "range": "± 1.0756906614215322"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2174.8532431466238,
            "unit": "ns",
            "range": "± 6.100110959369057"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123271551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 120.53964478628976,
            "unit": "ns",
            "range": "± 0.4016821559725115"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 197.49478560227615,
            "unit": "ns",
            "range": "± 0.6825218304383088"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 345.83641460963656,
            "unit": "ns",
            "range": "± 0.9854517639587962"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2193.2872772216797,
            "unit": "ns",
            "range": "± 6.831529966912213"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127244774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 119.75100517272949,
            "unit": "ns",
            "range": "± 0.35697685890350617"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 197.90039221445718,
            "unit": "ns",
            "range": "± 0.8197762498729011"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 349.50909981360803,
            "unit": "ns",
            "range": "± 1.1821976652289297"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2195.6814399132363,
            "unit": "ns",
            "range": "± 9.224287326801104"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734127988050,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 116.51095610398512,
            "unit": "ns",
            "range": "± 0.5381799394588281"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 232.24732081095377,
            "unit": "ns",
            "range": "± 0.5428899455035645"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 351.0677178700765,
            "unit": "ns",
            "range": "± 4.706008512577614"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2215.359992980957,
            "unit": "ns",
            "range": "± 15.37753602876763"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132291528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 120.34016132354736,
            "unit": "ns",
            "range": "± 0.20672160040670085"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 201.85771147410074,
            "unit": "ns",
            "range": "± 0.5139906500204126"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 382.65794004712785,
            "unit": "ns",
            "range": "± 2.527150378081036"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2169.370346069336,
            "unit": "ns",
            "range": "± 8.086485518834541"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133848582,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 118.70746612548828,
            "unit": "ns",
            "range": "± 0.1561440198216799"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 200.24508578436715,
            "unit": "ns",
            "range": "± 0.6924044769517104"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 354.46671758379256,
            "unit": "ns",
            "range": "± 1.660998849058668"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2281.8643136457963,
            "unit": "ns",
            "range": "± 78.46298311109284"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377149917,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 119.29225554833046,
            "unit": "ns",
            "range": "± 0.3467290979114484"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 197.1500015258789,
            "unit": "ns",
            "range": "± 0.5589125122985179"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 341.7323772723858,
            "unit": "ns",
            "range": "± 5.589666904635364"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2227.791507427509,
            "unit": "ns",
            "range": "± 8.128177990362854"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392650564,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 119.37900384267171,
            "unit": "ns",
            "range": "± 0.3248239276023877"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 197.85602887471518,
            "unit": "ns",
            "range": "± 0.35414677417510276"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 400.345253944397,
            "unit": "ns",
            "range": "± 1.054924873997155"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2227.3683166503906,
            "unit": "ns",
            "range": "± 6.422616836422211"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483571972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 120.23134742464337,
            "unit": "ns",
            "range": "± 0.21576264129369194"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 235.7056999206543,
            "unit": "ns",
            "range": "± 0.6018905236315426"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 399.536200932094,
            "unit": "ns",
            "range": "± 1.5548152968139315"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2202.071980067662,
            "unit": "ns",
            "range": "± 4.718900153740782"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542825051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 142.3640489578247,
            "unit": "ns",
            "range": "± 0.2691912546065668"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 202.08311997927152,
            "unit": "ns",
            "range": "± 2.2493675694237254"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 380.42355219523114,
            "unit": "ns",
            "range": "± 1.28853707749085"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2237.4201910836355,
            "unit": "ns",
            "range": "± 3.46294523489166"
          }
        ]
      }
    ],
    "Operations.BasicOperations (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945703687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1831.505635579427,
            "unit": "ns",
            "range": "± 2.522101318082666"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1797.3664011274066,
            "unit": "ns",
            "range": "± 1.5588078809308605"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1796.9469657311072,
            "unit": "ns",
            "range": "± 1.833924576647507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733954941552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1801.6040420532227,
            "unit": "ns",
            "range": "± 2.7111548713863063"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1798.2487519582112,
            "unit": "ns",
            "range": "± 2.6704434702094604"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1797.4522654215496,
            "unit": "ns",
            "range": "± 1.0830107984431454"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960502355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1805.1137669881184,
            "unit": "ns",
            "range": "± 4.130819341803971"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1802.1579889150767,
            "unit": "ns",
            "range": "± 4.9610093589003785"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1893.122444152832,
            "unit": "ns",
            "range": "± 4.542563782986088"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037769814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1833.1541442871094,
            "unit": "ns",
            "range": "± 9.710247933876424"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1797.0524088541667,
            "unit": "ns",
            "range": "± 1.8476782490745238"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1765.564647087684,
            "unit": "ns",
            "range": "± 2.006228705041631"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058434799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1832.1977070399694,
            "unit": "ns",
            "range": "± 3.844040999945732"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1860.386085510254,
            "unit": "ns",
            "range": "± 1.981372391580459"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1676.490947178432,
            "unit": "ns",
            "range": "± 3.811236128607291"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734074970971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1827.8260503496442,
            "unit": "ns",
            "range": "± 1.8022209056904919"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1794.9956734975178,
            "unit": "ns",
            "range": "± 0.5119753935558303"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1795.9675516401019,
            "unit": "ns",
            "range": "± 2.4026949652645184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114648442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1828.630324772426,
            "unit": "ns",
            "range": "± 1.0481144197143868"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1801.5761920383998,
            "unit": "ns",
            "range": "± 3.55577327646557"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1798.025945516733,
            "unit": "ns",
            "range": "± 0.8614618073550709"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123283203,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1800.0114168439593,
            "unit": "ns",
            "range": "± 2.602342484960901"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1798.7258402506511,
            "unit": "ns",
            "range": "± 1.966655570902119"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1892.030838557652,
            "unit": "ns",
            "range": "± 2.1560368455299517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127277273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1802.3931694030762,
            "unit": "ns",
            "range": "± 4.162003362634572"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1797.6640701293945,
            "unit": "ns",
            "range": "± 2.3164427654689796"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1891.8601853506905,
            "unit": "ns",
            "range": "± 2.122743157466951"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734127929888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1962.1582285563152,
            "unit": "ns",
            "range": "± 10.559681204305475"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1804.2882124582927,
            "unit": "ns",
            "range": "± 6.563261832667698"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1798.4642573765345,
            "unit": "ns",
            "range": "± 4.6214567706292184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132223906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1800.3425461905342,
            "unit": "ns",
            "range": "± 3.4434896369612247"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1797.5399080912273,
            "unit": "ns",
            "range": "± 2.411522044710215"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1796.8630423912634,
            "unit": "ns",
            "range": "± 2.7871924236344405"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133885615,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1804.0136745997838,
            "unit": "ns",
            "range": "± 9.55138705698261"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1795.9429740905762,
            "unit": "ns",
            "range": "± 1.8163453242896128"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1807.436888558524,
            "unit": "ns",
            "range": "± 0.9428259191894169"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377136392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1860.1007052830287,
            "unit": "ns",
            "range": "± 30.34234447867424"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1710.4654678931604,
            "unit": "ns",
            "range": "± 4.974218021147557"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1894.777706691197,
            "unit": "ns",
            "range": "± 2.49496707920841"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392605362,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1846.742923443134,
            "unit": "ns",
            "range": "± 23.437119605789395"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1798.584624699184,
            "unit": "ns",
            "range": "± 2.233800505641151"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1892.7347056070964,
            "unit": "ns",
            "range": "± 2.5077026545494414"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483525385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1836.9046274820964,
            "unit": "ns",
            "range": "± 7.282993501960292"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1796.975275186392,
            "unit": "ns",
            "range": "± 1.7701578071754702"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1892.1420778547015,
            "unit": "ns",
            "range": "± 4.210300659972793"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542859011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1802.3574022146372,
            "unit": "ns",
            "range": "± 2.0545026721962554"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1706.0887745448522,
            "unit": "ns",
            "range": "± 2.2803100883535685"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1798.0481001046987,
            "unit": "ns",
            "range": "± 2.2519250269803273"
          }
        ]
      }
    ],
    "Cluster.ClusterMigrate (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945699695,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35231.01152692522,
            "unit": "ns",
            "range": "± 63.123414397766815"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 35631.76785982572,
            "unit": "ns",
            "range": "± 83.41572140388364"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 30711.87764485677,
            "unit": "ns",
            "range": "± 38.20843164837711"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 29761.76055908203,
            "unit": "ns",
            "range": "± 16.48970854221574"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733954933140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35183.64140437199,
            "unit": "ns",
            "range": "± 43.91052235097413"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 36228.62418038504,
            "unit": "ns",
            "range": "± 41.29936949306911"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 30541.725667317707,
            "unit": "ns",
            "range": "± 38.66615234094002"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30239.96840256911,
            "unit": "ns",
            "range": "± 23.811136403012576"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960543151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35659.20715332031,
            "unit": "ns",
            "range": "± 64.99989349672872"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 36502.40091959635,
            "unit": "ns",
            "range": "± 38.927651267151866"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 30768.25002034505,
            "unit": "ns",
            "range": "± 27.043372744217884"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 29802.15563092913,
            "unit": "ns",
            "range": "± 108.97475896849727"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037762836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36939.19154575893,
            "unit": "ns",
            "range": "± 359.79236645503295"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 39209.50703938802,
            "unit": "ns",
            "range": "± 308.4202090554712"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 33406.21724446615,
            "unit": "ns",
            "range": "± 398.6167973776636"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 32963.14261300223,
            "unit": "ns",
            "range": "± 284.6650855830644"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058472606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35505.49774169922,
            "unit": "ns",
            "range": "± 23.664529744825447"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 41335.62316894531,
            "unit": "ns",
            "range": "± 66.15817402671948"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31436.942545572918,
            "unit": "ns",
            "range": "± 27.01281700508599"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30043.15216064453,
            "unit": "ns",
            "range": "± 35.10359186313279"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734074897156,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 34496.04056222098,
            "unit": "ns",
            "range": "± 37.01008344819957"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 36314.82426570012,
            "unit": "ns",
            "range": "± 82.97044239637255"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 30686.0355922154,
            "unit": "ns",
            "range": "± 38.781728118645084"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30343.80144391741,
            "unit": "ns",
            "range": "± 33.014863095444305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114644249,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 34407.08748953683,
            "unit": "ns",
            "range": "± 51.16392430172031"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 35762.91084289551,
            "unit": "ns",
            "range": "± 666.2198325713799"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31325.515747070312,
            "unit": "ns",
            "range": "± 23.556805045301967"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 29802.06059047154,
            "unit": "ns",
            "range": "± 96.77267191690427"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123257699,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 34413.578142438615,
            "unit": "ns",
            "range": "± 47.88722361436912"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 35597.464861188615,
            "unit": "ns",
            "range": "± 50.060757221708386"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 30643.378624549277,
            "unit": "ns",
            "range": "± 26.933333696276094"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30120.384623209637,
            "unit": "ns",
            "range": "± 48.38764528418534"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127260462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35640.77279227121,
            "unit": "ns",
            "range": "± 41.58697469592664"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 35228.52870396205,
            "unit": "ns",
            "range": "± 101.47584349736589"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31510.585327148438,
            "unit": "ns",
            "range": "± 37.47316591056229"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30232.608032226562,
            "unit": "ns",
            "range": "± 21.75489049541768"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734128000024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35196.244303385414,
            "unit": "ns",
            "range": "± 37.664136499031045"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 35741.835239955355,
            "unit": "ns",
            "range": "± 88.099518493931"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 30949.528401692707,
            "unit": "ns",
            "range": "± 29.424194018469024"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30814.778355189734,
            "unit": "ns",
            "range": "± 28.162306963012945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132256795,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36095.56509164663,
            "unit": "ns",
            "range": "± 86.74661398972759"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37857.70743233817,
            "unit": "ns",
            "range": "± 74.36234422868483"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31529.040120442707,
            "unit": "ns",
            "range": "± 27.170961281859054"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 29857.222638811385,
            "unit": "ns",
            "range": "± 43.18995606026196"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133914244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 34766.38700045072,
            "unit": "ns",
            "range": "± 26.425005762797884"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 35931.94087101863,
            "unit": "ns",
            "range": "± 93.37348985527404"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32134.933302137586,
            "unit": "ns",
            "range": "± 1065.5826374107655"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 29631.740010579426,
            "unit": "ns",
            "range": "± 29.79259381281045"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377200246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35017.289079938615,
            "unit": "ns",
            "range": "± 42.60543619047139"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 35643.835957845055,
            "unit": "ns",
            "range": "± 256.62906421243395"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 30475.752912248885,
            "unit": "ns",
            "range": "± 29.501324358575946"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 29652.95908610026,
            "unit": "ns",
            "range": "± 25.879932107325835"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392603986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 34991.866193498885,
            "unit": "ns",
            "range": "± 51.21874423236381"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 43327.36685616629,
            "unit": "ns",
            "range": "± 63.25931401762376"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31102.151925223214,
            "unit": "ns",
            "range": "± 38.83744306115426"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30192.11600167411,
            "unit": "ns",
            "range": "± 91.0608750489367"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483565380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 34960.81237792969,
            "unit": "ns",
            "range": "± 214.10384320891606"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 36996.79659329928,
            "unit": "ns",
            "range": "± 98.30084304352089"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32588.295288085938,
            "unit": "ns",
            "range": "± 87.29314338238345"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30977.762654622395,
            "unit": "ns",
            "range": "± 172.8552055724161"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542887491,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35681.80193219866,
            "unit": "ns",
            "range": "± 52.656837063936685"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37020.76456705729,
            "unit": "ns",
            "range": "± 56.401324490476924"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31972.969273158484,
            "unit": "ns",
            "range": "± 30.691682265488414"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 29662.869480678015,
            "unit": "ns",
            "range": "± 29.77852314463431"
          }
        ]
      }
    ],
    "Operations.ObjectOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945738338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 144728.39332798548,
            "unit": "ns",
            "range": "± 667.6109749202394"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 132743.62956891741,
            "unit": "ns",
            "range": "± 1136.4738013828216"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 128313.80084228516,
            "unit": "ns",
            "range": "± 406.89306730997146"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 156098.4109700521,
            "unit": "ns",
            "range": "± 1408.4105144527127"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 163059.17862955728,
            "unit": "ns",
            "range": "± 730.035540389783"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 149673.6108049665,
            "unit": "ns",
            "range": "± 387.25518984762647"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 143921.6282610212,
            "unit": "ns",
            "range": "± 1156.892797393514"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 166792.2929513114,
            "unit": "ns",
            "range": "± 1860.802954755072"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 143451.69231305804,
            "unit": "ns",
            "range": "± 1226.2578893810407"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 139975.39958844866,
            "unit": "ns",
            "range": "± 696.6439726906873"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 129606.39870042067,
            "unit": "ns",
            "range": "± 424.89048378304926"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 163564.05001627604,
            "unit": "ns",
            "range": "± 1826.8429241037347"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733954979860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 144355.9291788737,
            "unit": "ns",
            "range": "± 444.548660894369"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 130746.7486328125,
            "unit": "ns",
            "range": "± 1190.0352491957597"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 128650.45971679688,
            "unit": "ns",
            "range": "± 182.01858073842848"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 155837.85543619792,
            "unit": "ns",
            "range": "± 2306.604408858616"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 160598.79954427082,
            "unit": "ns",
            "range": "± 2167.27996061447"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 150458.03397623697,
            "unit": "ns",
            "range": "± 1287.4763675276777"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 153106.2109781901,
            "unit": "ns",
            "range": "± 384.9860720807187"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 172461.94659016927,
            "unit": "ns",
            "range": "± 1410.619128742746"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 145173.95924595423,
            "unit": "ns",
            "range": "± 376.28048367915505"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 133717.6591715495,
            "unit": "ns",
            "range": "± 994.890082158522"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 128395.35541643415,
            "unit": "ns",
            "range": "± 1847.2453674610779"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 159900.15244140624,
            "unit": "ns",
            "range": "± 1856.5519960606166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960627432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 144334.12056477866,
            "unit": "ns",
            "range": "± 1515.2035373668623"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 134671.63266225962,
            "unit": "ns",
            "range": "± 135.75866586127302"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 127227.7950032552,
            "unit": "ns",
            "range": "± 699.1427052001696"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 156155.8666469029,
            "unit": "ns",
            "range": "± 1607.5118124222354"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 161778.13122558594,
            "unit": "ns",
            "range": "± 322.1698493761811"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 150154.54260253906,
            "unit": "ns",
            "range": "± 1258.0014383452253"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 143134.39482770648,
            "unit": "ns",
            "range": "± 1219.050775416086"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 177147.0678100586,
            "unit": "ns",
            "range": "± 757.8421587461456"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 154641.32880108172,
            "unit": "ns",
            "range": "± 225.31674704870136"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 140713.3338704427,
            "unit": "ns",
            "range": "± 1286.5676513734927"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 128507.48196847098,
            "unit": "ns",
            "range": "± 929.2610338223931"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 173150.70163574218,
            "unit": "ns",
            "range": "± 1532.4151059223332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037795898,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 148464.58318219866,
            "unit": "ns",
            "range": "± 874.1941433118228"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 134592.05627441406,
            "unit": "ns",
            "range": "± 292.1635613708191"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 127354.80939592634,
            "unit": "ns",
            "range": "± 156.3658875286149"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 169325.0433000837,
            "unit": "ns",
            "range": "± 1504.2844939292513"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 161231.87925368088,
            "unit": "ns",
            "range": "± 1045.9915833779514"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 152644.43380301338,
            "unit": "ns",
            "range": "± 663.898398234611"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 143336.85180664062,
            "unit": "ns",
            "range": "± 851.362730846135"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 181209.05179268974,
            "unit": "ns",
            "range": "± 1470.8148327249928"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 143056.149937221,
            "unit": "ns",
            "range": "± 1087.4822621050291"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 134394.11490885416,
            "unit": "ns",
            "range": "± 271.69488618873754"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 134852.583984375,
            "unit": "ns",
            "range": "± 2097.3311475902037"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 157174.97017728366,
            "unit": "ns",
            "range": "± 741.20837896449"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058530214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 147067.677734375,
            "unit": "ns",
            "range": "± 472.2896675726806"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 129246.42373422477,
            "unit": "ns",
            "range": "± 224.92611041064657"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 131393.38916015625,
            "unit": "ns",
            "range": "± 848.3700200800151"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 158191.18684895834,
            "unit": "ns",
            "range": "± 1568.1100311511868"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 165057.67190987724,
            "unit": "ns",
            "range": "± 490.1653366401623"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 149379.690234375,
            "unit": "ns",
            "range": "± 859.3018045604219"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 146170.82404436384,
            "unit": "ns",
            "range": "± 1007.5720992857634"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 173845.9683268229,
            "unit": "ns",
            "range": "± 2924.3494104390998"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 147606.0072893415,
            "unit": "ns",
            "range": "± 379.1247039366477"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 129868.9307454427,
            "unit": "ns",
            "range": "± 829.0132707099801"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 132180.29985700335,
            "unit": "ns",
            "range": "± 732.4948394897012"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 154374.48948567707,
            "unit": "ns",
            "range": "± 1296.51661701581"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734075010063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 146741.77053598256,
            "unit": "ns",
            "range": "± 618.0743879402081"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 134445.08349609375,
            "unit": "ns",
            "range": "± 271.48172024067435"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 129599.96943010602,
            "unit": "ns",
            "range": "± 1364.0615325836186"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 156585.3662283761,
            "unit": "ns",
            "range": "± 839.3469168523584"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 161458.125,
            "unit": "ns",
            "range": "± 873.9017938265946"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 151577.17471078725,
            "unit": "ns",
            "range": "± 342.8506840501759"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 142169.42276204427,
            "unit": "ns",
            "range": "± 1943.8547741960072"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 164776.23733723958,
            "unit": "ns",
            "range": "± 1645.816683555271"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 145753.1678936298,
            "unit": "ns",
            "range": "± 290.9458896801717"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 137653.94051106772,
            "unit": "ns",
            "range": "± 322.05133238710334"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 125382.53315429688,
            "unit": "ns",
            "range": "± 1171.3355604994906"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 158078.58188476562,
            "unit": "ns",
            "range": "± 1952.107670038775"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114720259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 147045.70027669272,
            "unit": "ns",
            "range": "± 394.1003510027787"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 134655.0275065104,
            "unit": "ns",
            "range": "± 470.02538217332"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 126456.59610421317,
            "unit": "ns",
            "range": "± 493.42064405149154"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 155118.07929338727,
            "unit": "ns",
            "range": "± 2114.3555332167275"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 165795.89330240886,
            "unit": "ns",
            "range": "± 1431.3439374055674"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 167848.89666341146,
            "unit": "ns",
            "range": "± 380.2585446122252"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 145408.5904017857,
            "unit": "ns",
            "range": "± 1482.2963678156689"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 166172.34111328126,
            "unit": "ns",
            "range": "± 810.5453549765443"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 149636.82205636162,
            "unit": "ns",
            "range": "± 369.4579468428834"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 138517.06323242188,
            "unit": "ns",
            "range": "± 1053.4252028880742"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 128154.68358435997,
            "unit": "ns",
            "range": "± 1011.0937787745179"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 156840.4056640625,
            "unit": "ns",
            "range": "± 1747.0456797118907"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123276671,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 145197.21875,
            "unit": "ns",
            "range": "± 755.5776814970166"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 134201.71975911458,
            "unit": "ns",
            "range": "± 1080.8675993721258"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 124623.5852708083,
            "unit": "ns",
            "range": "± 287.7316606212516"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 163068.06234975962,
            "unit": "ns",
            "range": "± 535.1827864854533"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 147421.36254882812,
            "unit": "ns",
            "range": "± 533.8511987711012"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 145834.66429036457,
            "unit": "ns",
            "range": "± 663.4813670138681"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 146406.7286295573,
            "unit": "ns",
            "range": "± 1096.6424990579692"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 141871.45576171874,
            "unit": "ns",
            "range": "± 647.9589480369611"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 129557.92365373884,
            "unit": "ns",
            "range": "± 1478.0881763022305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127232566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 148808.72138671874,
            "unit": "ns",
            "range": "± 1100.796684842558"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 134395.17452298678,
            "unit": "ns",
            "range": "± 941.9285873341939"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 126998.00455147879,
            "unit": "ns",
            "range": "± 1114.1416355003169"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 165737.13863699776,
            "unit": "ns",
            "range": "± 1186.972648808962"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 151499.76246744793,
            "unit": "ns",
            "range": "± 1178.778108827621"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 143961.70407339244,
            "unit": "ns",
            "range": "± 773.761290381161"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 147308.7321026142,
            "unit": "ns",
            "range": "± 193.46386195834353"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 142932.91481526694,
            "unit": "ns",
            "range": "± 214.45303320628543"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 127996.12950032552,
            "unit": "ns",
            "range": "± 1214.0518845051618"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734127959166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 145587.5902005709,
            "unit": "ns",
            "range": "± 640.6353555112221"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 134884.65919596356,
            "unit": "ns",
            "range": "± 1195.5399024486615"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 126631.40576171875,
            "unit": "ns",
            "range": "± 1223.726157148509"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 165465.23413085938,
            "unit": "ns",
            "range": "± 592.1732140121417"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 162370.4053955078,
            "unit": "ns",
            "range": "± 1026.355258878365"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 145692.57236891525,
            "unit": "ns",
            "range": "± 1955.0941028020723"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 144173.47855050224,
            "unit": "ns",
            "range": "± 280.2150212677339"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 135630.2940673828,
            "unit": "ns",
            "range": "± 911.6610059030398"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 127274.3854654948,
            "unit": "ns",
            "range": "± 1558.4335902124133"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132229666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 145566.60442243304,
            "unit": "ns",
            "range": "± 1254.233186467935"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 132581.07631429037,
            "unit": "ns",
            "range": "± 246.69123983906763"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 127384.04912923177,
            "unit": "ns",
            "range": "± 1008.0190711432613"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 165181.683140346,
            "unit": "ns",
            "range": "± 496.7173221831663"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 160727.72725423178,
            "unit": "ns",
            "range": "± 378.48621233279437"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 149776.81434983475,
            "unit": "ns",
            "range": "± 724.3322950539765"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 150951.7583211263,
            "unit": "ns",
            "range": "± 347.89402713279827"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 146906.21271623884,
            "unit": "ns",
            "range": "± 948.2049118077787"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 127702.8850003756,
            "unit": "ns",
            "range": "± 697.2793785905457"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133859727,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 146038.79979529747,
            "unit": "ns",
            "range": "± 990.2744445936086"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 133483.19339192708,
            "unit": "ns",
            "range": "± 1280.210878092559"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 127004.07920619419,
            "unit": "ns",
            "range": "± 1132.778433508933"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 162683.28981236048,
            "unit": "ns",
            "range": "± 1341.8894297745344"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 157723.68116978236,
            "unit": "ns",
            "range": "± 767.7419091994147"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 146393.85392252603,
            "unit": "ns",
            "range": "± 1860.8634267914633"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 146555.3283203125,
            "unit": "ns",
            "range": "± 1497.9847549603287"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 144313.95389498197,
            "unit": "ns",
            "range": "± 546.0870898164778"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 128286.98223005023,
            "unit": "ns",
            "range": "± 1301.0122035122845"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377152716,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 143503.64390211838,
            "unit": "ns",
            "range": "± 145.27100942354733"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 138710.1912516276,
            "unit": "ns",
            "range": "± 845.5114509781625"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 127620.65216936384,
            "unit": "ns",
            "range": "± 1246.2441783136305"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 162440.9580453726,
            "unit": "ns",
            "range": "± 555.9295638193214"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 150023.25010172525,
            "unit": "ns",
            "range": "± 394.85081561360374"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 150387.87758789063,
            "unit": "ns",
            "range": "± 369.0147153539714"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 146285.21546223958,
            "unit": "ns",
            "range": "± 1270.84176683415"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 138458.08855731672,
            "unit": "ns",
            "range": "± 486.9300159591556"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 128916.42420247397,
            "unit": "ns",
            "range": "± 1598.5143059302197"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392626003,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 144482.5581711989,
            "unit": "ns",
            "range": "± 1197.0536476226212"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 137301.17061941963,
            "unit": "ns",
            "range": "± 1616.8506614951602"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 129615.17148061898,
            "unit": "ns",
            "range": "± 1202.8248735096404"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 164300.39700520833,
            "unit": "ns",
            "range": "± 980.906778220457"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 153529.35084751673,
            "unit": "ns",
            "range": "± 1433.0625941367152"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 144468.8676106771,
            "unit": "ns",
            "range": "± 1634.4523626769858"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 146055.4584679237,
            "unit": "ns",
            "range": "± 250.5001736583408"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 133174.57392578124,
            "unit": "ns",
            "range": "± 561.2763612062146"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 139711.3309500558,
            "unit": "ns",
            "range": "± 797.8033007222023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483559345,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 147130.1375732422,
            "unit": "ns",
            "range": "± 740.7144915495448"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 137640.972202846,
            "unit": "ns",
            "range": "± 339.93129812080554"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 127651.41911969866,
            "unit": "ns",
            "range": "± 596.179958657364"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 162851.87704031807,
            "unit": "ns",
            "range": "± 1171.7043427659414"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 150193.55275065106,
            "unit": "ns",
            "range": "± 1117.0638076647658"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 141954.60091458834,
            "unit": "ns",
            "range": "± 785.3321161151259"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 152642.65954589844,
            "unit": "ns",
            "range": "± 324.6478907995732"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 135529.85353190106,
            "unit": "ns",
            "range": "± 1265.5448090928048"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 129625.38936360677,
            "unit": "ns",
            "range": "± 972.1241974898426"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542846036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 148118.52294921875,
            "unit": "ns",
            "range": "± 322.0710417236829"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 138297.89070951022,
            "unit": "ns",
            "range": "± 551.6716527299393"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 125677.93657977764,
            "unit": "ns",
            "range": "± 416.6556787674945"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 164785.51543317523,
            "unit": "ns",
            "range": "± 369.5604864329115"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 149175.93448311943,
            "unit": "ns",
            "range": "± 494.2783615886432"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 144143.4770226112,
            "unit": "ns",
            "range": "± 430.84521918375384"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 146941.5271484375,
            "unit": "ns",
            "range": "± 1600.8327632191026"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 140558.55330984932,
            "unit": "ns",
            "range": "± 398.5272871026463"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 130406.61362868089,
            "unit": "ns",
            "range": "± 256.3138708587564"
          }
        ]
      }
    ],
    "Cluster.ClusterOperations (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945797915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16558.074442545574,
            "unit": "ns",
            "range": "± 13.806187993742991"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14575.02692086356,
            "unit": "ns",
            "range": "± 15.813772485918737"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14765.599605015346,
            "unit": "ns",
            "range": "± 13.807189118122695"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13767.161305745443,
            "unit": "ns",
            "range": "± 30.87169737734063"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 125745.26529947917,
            "unit": "ns",
            "range": "± 129.23972438383524"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19224.73882039388,
            "unit": "ns",
            "range": "± 15.022291644942896"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 18220.3373500279,
            "unit": "ns",
            "range": "± 23.706054108998806"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15331.322152273995,
            "unit": "ns",
            "range": "± 28.343644607901965"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14445.847429547992,
            "unit": "ns",
            "range": "± 30.36792519294839"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 143747.8008563702,
            "unit": "ns",
            "range": "± 152.34953338259336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733955003493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 15971.828402005709,
            "unit": "ns",
            "range": "± 23.650003719425833"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14740.02545674642,
            "unit": "ns",
            "range": "± 56.45251640799231"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15674.37510172526,
            "unit": "ns",
            "range": "± 16.713748770297325"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 12981.318155924479,
            "unit": "ns",
            "range": "± 10.106842467390154"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 135161.70479910713,
            "unit": "ns",
            "range": "± 117.87679432308585"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19816.620744977678,
            "unit": "ns",
            "range": "± 22.979283109362274"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 18546.80851527623,
            "unit": "ns",
            "range": "± 39.597936061904676"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15775.86188683143,
            "unit": "ns",
            "range": "± 32.693240483403244"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14115.128707885742,
            "unit": "ns",
            "range": "± 35.864057086039615"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 142151.05678013392,
            "unit": "ns",
            "range": "± 184.30404104037348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960738879,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16192.694396972656,
            "unit": "ns",
            "range": "± 21.714039837739875"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14651.671600341797,
            "unit": "ns",
            "range": "± 14.86956617096633"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14697.94880793645,
            "unit": "ns",
            "range": "± 13.204689795388562"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13462.419891357422,
            "unit": "ns",
            "range": "± 7.718603509698207"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 127652.17633928571,
            "unit": "ns",
            "range": "± 143.99545936398096"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20572.020263671875,
            "unit": "ns",
            "range": "± 34.9785467524874"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 18281.519024188703,
            "unit": "ns",
            "range": "± 28.38393810977675"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15111.499786376953,
            "unit": "ns",
            "range": "± 72.33255975979118"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 13939.10878499349,
            "unit": "ns",
            "range": "± 46.82187373505319"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 134592.41420200892,
            "unit": "ns",
            "range": "± 163.8116093839856"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037913048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16216.236441476005,
            "unit": "ns",
            "range": "± 13.495682909872151"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14679.898071289062,
            "unit": "ns",
            "range": "± 14.31487746855269"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14527.525438581195,
            "unit": "ns",
            "range": "± 37.515001578987544"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13099.007415771484,
            "unit": "ns",
            "range": "± 12.41961904526673"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 126903.60270182292,
            "unit": "ns",
            "range": "± 235.2064453828613"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 21334.392874581474,
            "unit": "ns",
            "range": "± 62.486819310887384"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 18326.69499715169,
            "unit": "ns",
            "range": "± 18.34074258509876"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15275.374094645182,
            "unit": "ns",
            "range": "± 15.154475865593417"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14333.641706194196,
            "unit": "ns",
            "range": "± 20.95077379690548"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 133713.91078404017,
            "unit": "ns",
            "range": "± 170.07474387261868"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058630445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16398.685564313615,
            "unit": "ns",
            "range": "± 25.556749734532417"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14748.867906842914,
            "unit": "ns",
            "range": "± 20.286949191850788"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14315.662892659506,
            "unit": "ns",
            "range": "± 29.155088054795527"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13347.171529134115,
            "unit": "ns",
            "range": "± 29.18758951115779"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 136228.9829799107,
            "unit": "ns",
            "range": "± 181.96901757102736"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19707.960408528645,
            "unit": "ns",
            "range": "± 36.00528176621694"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 18249.378531319755,
            "unit": "ns",
            "range": "± 35.999809457852905"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15371.126556396484,
            "unit": "ns",
            "range": "± 33.181857858367934"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 13958.411254882812,
            "unit": "ns",
            "range": "± 27.877803971017947"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 140624.3611653646,
            "unit": "ns",
            "range": "± 183.59357758839207"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734075055530,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 15814.652076134314,
            "unit": "ns",
            "range": "± 31.19638207694393"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14774.718373616537,
            "unit": "ns",
            "range": "± 26.39159097885969"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14427.450125558036,
            "unit": "ns",
            "range": "± 26.745907653722096"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13187.878799438477,
            "unit": "ns",
            "range": "± 15.272614352294791"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 130292.45082310268,
            "unit": "ns",
            "range": "± 154.2149271890937"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19774.579620361328,
            "unit": "ns",
            "range": "± 22.574510222165443"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 17696.361214773995,
            "unit": "ns",
            "range": "± 14.793670816742381"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 16426.475524902344,
            "unit": "ns",
            "range": "± 12.348178453525582"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 13906.565958658854,
            "unit": "ns",
            "range": "± 18.344820293758218"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 140177.94095552884,
            "unit": "ns",
            "range": "± 182.26743926278442"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114800931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16606.876046316964,
            "unit": "ns",
            "range": "± 19.845243468580687"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15011.619743934045,
            "unit": "ns",
            "range": "± 33.87023852742042"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14622.63652256557,
            "unit": "ns",
            "range": "± 181.1866052604927"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13043.775612967354,
            "unit": "ns",
            "range": "± 28.072992924247664"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 130512.55777994792,
            "unit": "ns",
            "range": "± 423.905260739302"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 21027.67547607422,
            "unit": "ns",
            "range": "± 23.86672419641754"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 17969.75816999163,
            "unit": "ns",
            "range": "± 16.596967348470443"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15188.745553152901,
            "unit": "ns",
            "range": "± 54.05173964274178"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14451.209024282602,
            "unit": "ns",
            "range": "± 40.56209924229435"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 148772.3291015625,
            "unit": "ns",
            "range": "± 519.9102848403372"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123463606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16007.140677315849,
            "unit": "ns",
            "range": "± 21.800907313185412"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15250.792224590596,
            "unit": "ns",
            "range": "± 22.315661917796916"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14403.66962139423,
            "unit": "ns",
            "range": "± 20.64635240549233"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13194.726210374098,
            "unit": "ns",
            "range": "± 23.30951037299467"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 129272.35576923077,
            "unit": "ns",
            "range": "± 292.2939204286272"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19041.84600830078,
            "unit": "ns",
            "range": "± 38.49919419474342"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20651.66971842448,
            "unit": "ns",
            "range": "± 53.27899188482587"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15602.074105398995,
            "unit": "ns",
            "range": "± 36.45546224895851"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14103.905017559346,
            "unit": "ns",
            "range": "± 17.117259292322576"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 141681.29507211538,
            "unit": "ns",
            "range": "± 211.27308696936765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127415864,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 15977.44639078776,
            "unit": "ns",
            "range": "± 60.1153536915268"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14781.795610700336,
            "unit": "ns",
            "range": "± 30.228727136013546"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14439.727223714193,
            "unit": "ns",
            "range": "± 24.579701047452623"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13257.324570875902,
            "unit": "ns",
            "range": "± 8.187638083124753"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 131847.4698893229,
            "unit": "ns",
            "range": "± 141.42884489177965"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19114.29225376674,
            "unit": "ns",
            "range": "± 28.8094760450955"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 19725.345938546317,
            "unit": "ns",
            "range": "± 32.471258724772994"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15595.553001990686,
            "unit": "ns",
            "range": "± 12.833790790607907"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14762.87981669108,
            "unit": "ns",
            "range": "± 13.454513871435546"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 139347.96840122767,
            "unit": "ns",
            "range": "± 244.27203465150413"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734128079969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16191.351318359375,
            "unit": "ns",
            "range": "± 28.287041444419152"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15166.259969075521,
            "unit": "ns",
            "range": "± 16.21127125043033"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14764.936828613281,
            "unit": "ns",
            "range": "± 12.745673083694381"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13102.065922663762,
            "unit": "ns",
            "range": "± 18.373041152690664"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 131178.56241861978,
            "unit": "ns",
            "range": "± 346.4439487295859"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19977.37557547433,
            "unit": "ns",
            "range": "± 31.497719201749746"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 18696.14034016927,
            "unit": "ns",
            "range": "± 41.49752626294976"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15486.2451171875,
            "unit": "ns",
            "range": "± 36.36483050249548"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 13827.856336321149,
            "unit": "ns",
            "range": "± 9.17558761329618"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 140047.06561748797,
            "unit": "ns",
            "range": "± 176.88625758861798"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132366397,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16068.944725623498,
            "unit": "ns",
            "range": "± 23.803298698331773"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14794.52154976981,
            "unit": "ns",
            "range": "± 13.610251409794394"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14316.581181117466,
            "unit": "ns",
            "range": "± 16.3864831763141"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13437.525285993304,
            "unit": "ns",
            "range": "± 16.309990338377915"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 130271.63981119792,
            "unit": "ns",
            "range": "± 146.56830332205686"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19954.64148888221,
            "unit": "ns",
            "range": "± 24.01448287300054"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20457.10648756761,
            "unit": "ns",
            "range": "± 27.31537808267716"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15965.363057454428,
            "unit": "ns",
            "range": "± 32.00045192157603"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14809.358626145582,
            "unit": "ns",
            "range": "± 12.99358683441879"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 139570.86181640625,
            "unit": "ns",
            "range": "± 128.69824437102656"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734134048787,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 15836.841532389322,
            "unit": "ns",
            "range": "± 13.773462274851251"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15110.299631754557,
            "unit": "ns",
            "range": "± 12.265606111803226"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15044.83652750651,
            "unit": "ns",
            "range": "± 36.10639860209176"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13157.755388532367,
            "unit": "ns",
            "range": "± 16.036790252731162"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 130637.7775493421,
            "unit": "ns",
            "range": "± 1852.788865348187"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19042.63371058873,
            "unit": "ns",
            "range": "± 18.88392405477315"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20621.904296875,
            "unit": "ns",
            "range": "± 45.3703560689139"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15229.558504544771,
            "unit": "ns",
            "range": "± 14.666537792729473"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 13881.787461500902,
            "unit": "ns",
            "range": "± 15.451993619638998"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 142013.427734375,
            "unit": "ns",
            "range": "± 213.57998664572835"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377397395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16087.73912702288,
            "unit": "ns",
            "range": "± 19.147225534159706"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15726.326802571615,
            "unit": "ns",
            "range": "± 24.73737305015155"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14572.568620954242,
            "unit": "ns",
            "range": "± 13.594171627868494"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13100.350843157086,
            "unit": "ns",
            "range": "± 20.899836019541222"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 131589.9448939732,
            "unit": "ns",
            "range": "± 149.8019621667684"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19518.34455217634,
            "unit": "ns",
            "range": "± 32.6649613106038"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20190.70587158203,
            "unit": "ns",
            "range": "± 152.3627597518587"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15233.334350585938,
            "unit": "ns",
            "range": "± 28.59891342560438"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14027.688925606864,
            "unit": "ns",
            "range": "± 18.2560811308543"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 143372.9443359375,
            "unit": "ns",
            "range": "± 747.082591817688"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392793132,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16063.5866800944,
            "unit": "ns",
            "range": "± 14.1107512562443"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14811.34514441857,
            "unit": "ns",
            "range": "± 12.935477384427505"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14545.215933663505,
            "unit": "ns",
            "range": "± 25.862046117467003"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13294.287436349052,
            "unit": "ns",
            "range": "± 16.86350304578177"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 130304.33349609375,
            "unit": "ns",
            "range": "± 85.12943590600571"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19301.560974121094,
            "unit": "ns",
            "range": "± 19.19233779320933"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20047.14617047991,
            "unit": "ns",
            "range": "± 83.09646525828033"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15534.50448172433,
            "unit": "ns",
            "range": "± 11.334383400932829"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15307.463684082031,
            "unit": "ns",
            "range": "± 15.310884187052691"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 154110.72998046875,
            "unit": "ns",
            "range": "± 310.36623037257266"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483697809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16061.265781947544,
            "unit": "ns",
            "range": "± 15.157521838111883"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14707.71953876202,
            "unit": "ns",
            "range": "± 19.73144295074916"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14508.830026479867,
            "unit": "ns",
            "range": "± 18.15764332180265"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13239.79241507394,
            "unit": "ns",
            "range": "± 18.525285251994408"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 131639.2586263021,
            "unit": "ns",
            "range": "± 105.36119249302807"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 18672.892543247766,
            "unit": "ns",
            "range": "± 15.586194107169327"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 18121.62898137019,
            "unit": "ns",
            "range": "± 18.18427139836998"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15616.394981971154,
            "unit": "ns",
            "range": "± 15.716031526218702"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 15667.400905064174,
            "unit": "ns",
            "range": "± 35.61857409353115"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 142314.27734375,
            "unit": "ns",
            "range": "± 146.62729849760058"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734543021420,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 15939.851379394531,
            "unit": "ns",
            "range": "± 21.468899249660463"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14575.277181772086,
            "unit": "ns",
            "range": "± 14.426309740858585"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14678.364797738883,
            "unit": "ns",
            "range": "± 41.56784307425154"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13675.279671805245,
            "unit": "ns",
            "range": "± 16.542452050572297"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 131582.0547250601,
            "unit": "ns",
            "range": "± 162.4204338782231"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19130.66687950721,
            "unit": "ns",
            "range": "± 15.015039798708845"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 17770.357840401786,
            "unit": "ns",
            "range": "± 29.693892835456094"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15805.892944335938,
            "unit": "ns",
            "range": "± 33.027609082143435"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 14188.75747680664,
            "unit": "ns",
            "range": "± 25.405047577949855"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 141541.0441080729,
            "unit": "ns",
            "range": "± 970.0440979016588"
          }
        ]
      }
    ],
    "Operations.ObjectOperations (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd766248719caf2817592e988a5e67edc22b511b",
          "message": "Implementing BDN Perf pipeline (#758)\n\n* The CI scripts, YML and config files to check perf using BDN benchmarking.  Also, a fix in ClusterBench for and renamed Lua Runner benchmarking\r\n\r\n* Cleaned up the debug message and updated couple expected values\r\n\r\n* Updated SAddRem - windows - to 130 from 118.  Also removed unncesssary build statement in YML\r\n\r\n* Proof of concept for Performance run on ADO using BDN\r\n\r\n* Comment out number of Cores check so can try proof of concept on ADO perf machines\r\n\r\n* Getting close to having BDN working\r\n\r\n* Fixed RespLuaStress\r\n\r\n* Fixed issue in Lua Runner Stress\r\n\r\n* Updated config values, set charting and commit comment as separate tasks\r\n\r\n* Updated config values\r\n\r\n* Minor change to YML (remove pull requests) and updated LuaRunner config value\r\n\r\n* One more config value fix\r\n\r\n* Added a task to do the push\r\n\r\n* Putting back to push chart in the chart task and not a separate one\r\n\r\n* Moved the permissions to full workflow\r\n\r\n* Just minor to add commits\r\n\r\n* Adding actions: write permit since actions default to read only\r\n\r\n* Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers\r\n\r\n* A few fixes\r\n\r\n* Updated BDN perf YML, config files and ps1 script\r\n\r\n* Versioning issue with BDN test files, fixed now\r\n\r\n* Bump threshold to 35% (135%) to trigger perf failure\r\n\r\n* Set to Linux only to reduce number of consectutive tests which caused push collisions with GitHub\r\n\r\n* Just Windows only test run\r\n\r\n* Putting it back to both OS for the tests\r\n\r\n* Set threshhold to 50% (150%) as seeing BDN ran twice on same code sometimes is in 40%+ range of difference.\r\n\r\n* Big change where using continuousbenchmark branch for all data for continuous benchmarking and also changed to where script is only checking allocated values and let github-action-benchmark compare mean values\r\n\r\n* Updated ClusterBench to get main changes\r\n\r\n* Fix issue with Cluster BDN is not able to access folder so setting to tmp which does have access\r\n\r\n* Bumping threshold to 50% (150%) as mean value in RespParseStress can vary into the 40% from run to run.\r\n\r\n* First update\r\n\r\n* Hiding the Gen0 column for Lua benchmark\r\n\r\n* Updated BDN test infrastructure to match the new BDN org.\r\n\r\n* Fix bug in ObjectOperations\r\n\r\n* Set max items on chart to 50 ... can modify later if want\r\n\r\n* Added the run on push to main\r\n\r\n* Put Performance Pipeline back\r\n\r\n* Fixed the default case when no parameters sent to ps1\r\n\r\n* Cleaned up config files:\r\nhave shorter names for values\r\nnot have configuration or framework (moved to ps1 file)\r\nnot have windows / linux differnce in expected\r\nMoved acceptable allocated range to script\r\n\r\nmodified the script:\r\nto only load values for the specific test instead of looking for all values\r\nchanges to match the changes in config (shorter names, etc)\r\n\r\n* Big update to where moved to a single config file and the ps1 file does not need to be updated when new BDNs are added.\r\n\r\n* Added workflow_dispatch: to deploy website yml so we can manually deploy website if we want\r\n\r\n* Updated alert-threshold from 150% to 140%. If too many false positives we can raise it back. Also, removed darrenge from the alert CC line as no need for that.\r\n\r\n* Removed the commit comment / comparison to previous commit task. Still will get  summary data in the specific workflow run and still uploads data to charts (when pushing to main).\r\n\r\n* Minor update - comments only",
          "timestamp": "2024-12-11T11:29:32-08:00",
          "tree_id": "a262ac843488b7afb61ad91dfb2a488917243391",
          "url": "https://github.com/microsoft/garnet/commit/dd766248719caf2817592e988a5e67edc22b511b"
        },
        "date": 1733945963079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 117469.85614483173,
            "unit": "ns",
            "range": "± 118.20445960057495"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 101654.33255709134,
            "unit": "ns",
            "range": "± 336.13015448341247"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 94977.55039760044,
            "unit": "ns",
            "range": "± 101.4315714587657"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 124513.5968889509,
            "unit": "ns",
            "range": "± 336.1565399510592"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 135552.19563802084,
            "unit": "ns",
            "range": "± 477.0538457125118"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 110716.27371651786,
            "unit": "ns",
            "range": "± 313.58627720752906"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 115650.49264090402,
            "unit": "ns",
            "range": "± 301.2726767340086"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 134771.18577223556,
            "unit": "ns",
            "range": "± 568.2523229533273"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 113091.53279622395,
            "unit": "ns",
            "range": "± 282.0970455083775"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 111425.2022298177,
            "unit": "ns",
            "range": "± 146.2544357108826"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 96716.28865559895,
            "unit": "ns",
            "range": "± 162.94304485938494"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 119671.75211588542,
            "unit": "ns",
            "range": "± 542.1449393168633"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aabc0bb831f2313bce41c43c29c9c2b0e434cb00",
          "message": "handle uninitialized epoch value merge (#874)\n\n* handle uninitialized epoch value merge\r\n\r\n* release 1.0.47",
          "timestamp": "2024-12-11T14:03:36-08:00",
          "tree_id": "ca83e06a72e78b6bab3872148b9e3eb5cb476269",
          "url": "https://github.com/microsoft/garnet/commit/aabc0bb831f2313bce41c43c29c9c2b0e434cb00"
        },
        "date": 1733955225122,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 117657.91585286458,
            "unit": "ns",
            "range": "± 395.0307387124439"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 98876.83959960938,
            "unit": "ns",
            "range": "± 250.13554982077963"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 92904.09138997395,
            "unit": "ns",
            "range": "± 102.57710469788871"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 122700.70393880208,
            "unit": "ns",
            "range": "± 481.5394253723863"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 131762.66764322916,
            "unit": "ns",
            "range": "± 881.6441622073024"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 114055.39916992188,
            "unit": "ns",
            "range": "± 661.6673976752282"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 107621.28819056919,
            "unit": "ns",
            "range": "± 433.1636920027391"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 136735.15787760416,
            "unit": "ns",
            "range": "± 977.9260258655637"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 116343.52792593148,
            "unit": "ns",
            "range": "± 249.84625402093044"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 99682.90123572716,
            "unit": "ns",
            "range": "± 260.4978876207597"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 94299.9544583834,
            "unit": "ns",
            "range": "± 203.97918902979606"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 120511.50599888393,
            "unit": "ns",
            "range": "± 696.4709856889897"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1d4b66c442284f95c8db51e57274ba07316561",
          "message": "Bump nanoid from 3.3.7 to 3.3.8 in /website (#873)\n\nBumps [nanoid](https://github.com/ai/nanoid) from 3.3.7 to 3.3.8.\r\n- [Release notes](https://github.com/ai/nanoid/releases)\r\n- [Changelog](https://github.com/ai/nanoid/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/ai/nanoid/compare/3.3.7...3.3.8)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nanoid\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: darrenge <darrenge@microsoft.com>",
          "timestamp": "2024-12-11T15:37:40-08:00",
          "tree_id": "1d3dbe6f308895a822d913fd3960c803796cb264",
          "url": "https://github.com/microsoft/garnet/commit/cf1d4b66c442284f95c8db51e57274ba07316561"
        },
        "date": 1733960828851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 116593.3475748698,
            "unit": "ns",
            "range": "± 516.3730861704294"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 104033.29608623798,
            "unit": "ns",
            "range": "± 161.87090300705088"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 98085.92529296875,
            "unit": "ns",
            "range": "± 84.9483517207441"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 126816.02783203125,
            "unit": "ns",
            "range": "± 472.19561063740264"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 131121.10072544642,
            "unit": "ns",
            "range": "± 475.4391220032019"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 110045.25472005208,
            "unit": "ns",
            "range": "± 346.41315573235096"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 108467.96264648438,
            "unit": "ns",
            "range": "± 284.1038503553621"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 130421.05364118304,
            "unit": "ns",
            "range": "± 691.7146000864416"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 116338.47249348958,
            "unit": "ns",
            "range": "± 231.99281303805853"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 110297.1748860677,
            "unit": "ns",
            "range": "± 209.20849533261824"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 94023.35205078125,
            "unit": "ns",
            "range": "± 116.13650667485328"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 130021.17838541667,
            "unit": "ns",
            "range": "± 313.55904348302136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96085550+vazois@users.noreply.github.com",
            "name": "Vasileios Zois",
            "username": "vazois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d4c7448569063ea786802a0580acf465108e037",
          "message": "Add ReadOnly Support for IDevice (#870)\n\n* add readOnly flag in streamProvider for LocalStorageDevice\r\n\r\n* add linux readOnly flag for managed device\r\n\r\n* add explicit readOnly assignment for parameter",
          "timestamp": "2024-12-12T13:03:41-08:00",
          "tree_id": "3d591691e9ac0cfb714d98096a0580abab554b23",
          "url": "https://github.com/microsoft/garnet/commit/0d4c7448569063ea786802a0580acf465108e037"
        },
        "date": 1734037965566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 113641.48230919472,
            "unit": "ns",
            "range": "± 240.10457908841713"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 98913.42366536458,
            "unit": "ns",
            "range": "± 200.9948349678025"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 96501.7804827009,
            "unit": "ns",
            "range": "± 197.50314565489035"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 129257.92073567708,
            "unit": "ns",
            "range": "± 708.044529123354"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 130608.94775390625,
            "unit": "ns",
            "range": "± 468.09136425576077"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 111809.44661458333,
            "unit": "ns",
            "range": "± 248.43179167809834"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 124643.34542410714,
            "unit": "ns",
            "range": "± 412.5084651025406"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 135039.78553185097,
            "unit": "ns",
            "range": "± 665.3841813222837"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 115858.29467773438,
            "unit": "ns",
            "range": "± 252.72961577597215"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 106498.07047526042,
            "unit": "ns",
            "range": "± 188.50303381936072"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 95298.00763811384,
            "unit": "ns",
            "range": "± 236.2681281500387"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 129282.79378255208,
            "unit": "ns",
            "range": "± 974.6468983818551"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "talzacc@microsoft.com",
            "name": "Tal Zaccai",
            "username": "TalZaccai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2261c72948136f6af9dfdfefc86ebb02c686a",
          "message": "CustomCommandManager + CustomCommandManagerSession to use auto-expandable maps (#848)\n\n* wip\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Comments + tests\r\n\r\n* wip\r\n\r\n* fixes\r\n\r\n* fix\r\n\r\n* format\r\n\r\n* Adding a non-concurrent ExpandableMap\r\n\r\n* small fix\r\n\r\n* Switching to SingleWriterMultiReaderLock\r\n\r\n* Some thread-safety related fixes\r\n\r\n* Added some async tests for command registration\r\n\r\n* small bugfixes\r\n\r\n* format",
          "timestamp": "2024-12-12T18:49:23-08:00",
          "tree_id": "27ea42b0a4d6b834a7f450d12100d29e8b94f077",
          "url": "https://github.com/microsoft/garnet/commit/f2c2261c72948136f6af9dfdfefc86ebb02c686a"
        },
        "date": 1734058717018,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 116214.22932942708,
            "unit": "ns",
            "range": "± 78.97949944848496"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 97392.4543108259,
            "unit": "ns",
            "range": "± 147.6341061417578"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 93973.09919084821,
            "unit": "ns",
            "range": "± 154.68857943244714"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 121251.93743024554,
            "unit": "ns",
            "range": "± 457.91784889670726"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 126843.13720703125,
            "unit": "ns",
            "range": "± 359.70269063514195"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 113535.68237304688,
            "unit": "ns",
            "range": "± 300.9818706997414"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 105952.15876652644,
            "unit": "ns",
            "range": "± 303.51133031953464"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 131526.42578125,
            "unit": "ns",
            "range": "± 869.3067850596786"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 115147.79459635417,
            "unit": "ns",
            "range": "± 188.32108318023344"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 108673.25090680804,
            "unit": "ns",
            "range": "± 142.78057386665182"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 94941.06586162861,
            "unit": "ns",
            "range": "± 199.47444323813497"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 125488.82681039664,
            "unit": "ns",
            "range": "± 353.4912170985075"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kmontrose@microsoft.com",
            "name": "kevin-montrose",
            "username": "kevin-montrose"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa004d372a23731e3e5f0fa65d701c4a4d62b381",
          "message": "Fixes for SCRIPT commands and behavior (#860)\n\n* fix FastBasicRespCommandsInfo construction and lookup; which incidentally fixes EVALSHA when scripting is enabled\r\n\r\n* fix MultiKeySlotVerify - keys past the second were not correctly visited\r\n\r\n* break SCRIPT into appropriate subcommands; update command info; fix SCRIPT EXISTS to match Redis behavior; tests for SCRIPT|* ACLs; DRY up SCRIPT command implementations\r\n\r\n* test script failures, match Redis error messages\r\n\r\n* remove byte[] allocations from evalsha path (amongst others); should get the Lua overhead down to just the NLua + locking stuff\r\n\r\n* add test for multi-hash version of SCRIPT|EXIST; fix bug where hash casing matters (matching Redis by defaulting to upper case hashes values); remove debug code\r\n\r\n* fix formatting\r\n\r\n* uppercase some test cases I missed\r\n\r\n* add EVALSHA to cluster slot tests\r\n\r\n* restore lower case hashes; erroneously thought Redis used upper case\r\n\r\n* add ScriptOperations to benchmark this change\r\n\r\n* formatting fixes\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-12T23:23:53-08:00",
          "tree_id": "8c0664ade6b6572a8af295961a2d61a846b60756",
          "url": "https://github.com/microsoft/garnet/commit/aa004d372a23731e3e5f0fa65d701c4a4d62b381"
        },
        "date": 1734075219823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 117602.5850423177,
            "unit": "ns",
            "range": "± 268.14469719984487"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 100068.25648716518,
            "unit": "ns",
            "range": "± 215.98866455187687"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 98195.68969726562,
            "unit": "ns",
            "range": "± 170.2632887826311"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 129471.09562800481,
            "unit": "ns",
            "range": "± 601.4645179170432"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 128720.00325520833,
            "unit": "ns",
            "range": "± 724.5561520499434"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 116062.32125418527,
            "unit": "ns",
            "range": "± 285.29683511968113"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 105981.90133231027,
            "unit": "ns",
            "range": "± 354.13393520164215"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 135189.70249720983,
            "unit": "ns",
            "range": "± 872.1067969842775"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 115300.41591099331,
            "unit": "ns",
            "range": "± 166.86754308278034"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 106325.14729817708,
            "unit": "ns",
            "range": "± 499.8208465048155"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 95338.51492745536,
            "unit": "ns",
            "range": "± 246.8452213186863"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 123997.06186147836,
            "unit": "ns",
            "range": "± 719.1933766640254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca0222960f0145302eb1fc9896f680f9aff5a4d1",
          "message": "Streaming snapshot checkpoint in Tsavorite (#824)\n\n* Mild refactor in preparation\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* updates\r\n\r\n* fix tests to not cover steaming snapshot as it is not a traditional checkpoint\r\n\r\n* add unit test\r\n\r\n* fix tests\r\n\r\n* fix test\r\n\r\n* updates\r\n\r\n* Support maxAddress during liveness checks\r\n\r\n* improvements to api\r\n\r\n* Add SetVersion API\r\n\r\n* more checks\r\n\r\n* add comment\r\n\r\n* add comments",
          "timestamp": "2024-12-13T10:25:49-08:00",
          "tree_id": "917be4f308af8da9ec7782faa5069a09f2b873c5",
          "url": "https://github.com/microsoft/garnet/commit/ca0222960f0145302eb1fc9896f680f9aff5a4d1"
        },
        "date": 1734114928649,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 117135.84798177083,
            "unit": "ns",
            "range": "± 187.1430737430288"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 102171.64132254464,
            "unit": "ns",
            "range": "± 342.4008841905227"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 95367.40397135417,
            "unit": "ns",
            "range": "± 350.4140577051225"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: ACL)",
            "value": 135771.83919270834,
            "unit": "ns",
            "range": "± 594.9988108243732"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 130480.45817057292,
            "unit": "ns",
            "range": "± 405.8453523718878"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 117489.93791852679,
            "unit": "ns",
            "range": "± 1452.651261908386"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 110460.13509114583,
            "unit": "ns",
            "range": "± 1596.394497504247"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: AOF)",
            "value": 130453.11686197917,
            "unit": "ns",
            "range": "± 977.9933246960668"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 117863.3562360491,
            "unit": "ns",
            "range": "± 202.7785370346965"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 104769.48590959821,
            "unit": "ns",
            "range": "± 192.3096648700648"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 95717.91120256696,
            "unit": "ns",
            "range": "± 108.29702596150958"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.HSetDel(Params: None)",
            "value": 122163.60595703125,
            "unit": "ns",
            "range": "± 703.501128105373"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f679b0b683e4e94fa2a3ebb2689708ec2efee74",
          "message": "Added BDN for all hash commands (#879)\n\n* Added BDN for all hash commands\r\n\r\n* Moved BDN of hash set to separate class",
          "timestamp": "2024-12-13T12:50:11-08:00",
          "tree_id": "66c04dc8b338f40aeb360419fc1953dcc219abbc",
          "url": "https://github.com/microsoft/garnet/commit/3f679b0b683e4e94fa2a3ebb2689708ec2efee74"
        },
        "date": 1734123459139,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 115062.64386858259,
            "unit": "ns",
            "range": "± 168.8752736031304"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 105443.16162109375,
            "unit": "ns",
            "range": "± 253.66750413562195"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 97432.7627328726,
            "unit": "ns",
            "range": "± 312.7273749022049"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 129291.72252308238,
            "unit": "ns",
            "range": "± 2384.9101900122428"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 124482.71565755208,
            "unit": "ns",
            "range": "± 1355.0766741124824"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 111616.0382952009,
            "unit": "ns",
            "range": "± 452.90685304667704"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 114352.7334359976,
            "unit": "ns",
            "range": "± 240.17060234382208"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 102656.54744466145,
            "unit": "ns",
            "range": "± 245.24017665253007"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 95597.30122884114,
            "unit": "ns",
            "range": "± 133.960310466468"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "178dc21b572263c4421e2602e41cc243cb94f507",
          "message": "Fix writing output for scan (#880)\n\n* Writing output for scan was not handling output buffer (dcurr, dend) correctly. Also, it was not handling large keys correctly.\r\n\r\n* update version",
          "timestamp": "2024-12-13T13:55:49-08:00",
          "tree_id": "1966c990a96fa84a42747ad14ce5480535196e57",
          "url": "https://github.com/microsoft/garnet/commit/178dc21b572263c4421e2602e41cc243cb94f507"
        },
        "date": 1734127412919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 115642.42318960336,
            "unit": "ns",
            "range": "± 102.75278245436874"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 102466.34192833534,
            "unit": "ns",
            "range": "± 202.8306439194994"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 100561.8913922991,
            "unit": "ns",
            "range": "± 160.0906994319792"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 139020.92529296875,
            "unit": "ns",
            "range": "± 330.93826372590314"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 118789.26676432292,
            "unit": "ns",
            "range": "± 1367.0680026826262"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 115630.224609375,
            "unit": "ns",
            "range": "± 419.3880405867164"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 116112.93247767857,
            "unit": "ns",
            "range": "± 325.70703374699957"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 102194.97855050223,
            "unit": "ns",
            "range": "± 271.1996214923902"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 97478.23399135044,
            "unit": "ns",
            "range": "± 225.35990111434828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1ce0dafecaba15335e8e0767a6eeb441b72e56c",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#862)\n\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T14:08:03-08:00",
          "tree_id": "b2aa23d9235558527754332fab728fa03d60007b",
          "url": "https://github.com/microsoft/garnet/commit/f1ce0dafecaba15335e8e0767a6eeb441b72e56c"
        },
        "date": 1734128140863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 118704.71976143973,
            "unit": "ns",
            "range": "± 242.04066056775372"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 101687.70426432292,
            "unit": "ns",
            "range": "± 182.8555232010719"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 97941.39506022136,
            "unit": "ns",
            "range": "± 173.81464464314806"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 131557.5732421875,
            "unit": "ns",
            "range": "± 413.5562759601777"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 121853.09012276786,
            "unit": "ns",
            "range": "± 1809.6477469639594"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 116753.09709821429,
            "unit": "ns",
            "range": "± 375.6256127553452"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 115732.48291015625,
            "unit": "ns",
            "range": "± 184.13804250367644"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 102807.2041829427,
            "unit": "ns",
            "range": "± 208.4627278586627"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 98850.12468610491,
            "unit": "ns",
            "range": "± 201.5069162787347"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132329136,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 119788.99739583333,
            "unit": "ns",
            "range": "± 305.86198833475123"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 100460.20670572917,
            "unit": "ns",
            "range": "± 197.590583535323"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 98185.46793619792,
            "unit": "ns",
            "range": "± 253.79178289688934"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 137692.49877929688,
            "unit": "ns",
            "range": "± 313.1019759300935"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 121363.36588541667,
            "unit": "ns",
            "range": "± 1944.1178779070988"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 108216.00717397836,
            "unit": "ns",
            "range": "± 306.0266981971123"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 118370.60546875,
            "unit": "ns",
            "range": "± 800.1728807543527"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 100838.63431490384,
            "unit": "ns",
            "range": "± 127.53967505649548"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 98680.09905133929,
            "unit": "ns",
            "range": "± 205.10962159461997"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734134053726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 114463.0594889323,
            "unit": "ns",
            "range": "± 191.8600474852767"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 98621.8135579427,
            "unit": "ns",
            "range": "± 226.88147621126745"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 101412.52632141113,
            "unit": "ns",
            "range": "± 1758.5818662879167"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 129331.33382161458,
            "unit": "ns",
            "range": "± 919.1197258199484"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 120020.4150390625,
            "unit": "ns",
            "range": "± 1170.6279527104539"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 124061.46728515625,
            "unit": "ns",
            "range": "± 383.9969529502185"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 117775.8535531851,
            "unit": "ns",
            "range": "± 206.91973810773197"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 103430.6894155649,
            "unit": "ns",
            "range": "± 195.9502351956504"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 98355.10602678571,
            "unit": "ns",
            "range": "± 395.3336358162344"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377304103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 114620.31062199519,
            "unit": "ns",
            "range": "± 1583.203921993921"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 101830.67708333333,
            "unit": "ns",
            "range": "± 253.97500389876797"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 97592.84580775669,
            "unit": "ns",
            "range": "± 221.90875628704876"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 129444.56411508414,
            "unit": "ns",
            "range": "± 428.02077053094916"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 120631.00341796875,
            "unit": "ns",
            "range": "± 898.0823255409052"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 117381.39078776042,
            "unit": "ns",
            "range": "± 448.9830915806046"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 117584.48311941964,
            "unit": "ns",
            "range": "± 111.7342870503071"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 103258.96362304688,
            "unit": "ns",
            "range": "± 316.9284272989154"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 95570.3857421875,
            "unit": "ns",
            "range": "± 191.44852851011865"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392809098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 119467.15175083706,
            "unit": "ns",
            "range": "± 307.3869156225632"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 103709.81794084821,
            "unit": "ns",
            "range": "± 292.02720152176784"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 97448.48185221355,
            "unit": "ns",
            "range": "± 313.9269585071764"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 132757.5830078125,
            "unit": "ns",
            "range": "± 435.0077955599788"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 117366.10020228794,
            "unit": "ns",
            "range": "± 246.10804797892393"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 111037.65014648438,
            "unit": "ns",
            "range": "± 274.61611362926465"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 126121.71161358173,
            "unit": "ns",
            "range": "± 148.81639455541807"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 105498.98420061384,
            "unit": "ns",
            "range": "± 264.0938894803624"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 99995.43718610491,
            "unit": "ns",
            "range": "± 212.49847304642287"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483707888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 120307.38431490384,
            "unit": "ns",
            "range": "± 324.2416449763312"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 105396.26934344952,
            "unit": "ns",
            "range": "± 140.14739475840702"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 94781.28763834636,
            "unit": "ns",
            "range": "± 116.01739542384513"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 131927.42745535713,
            "unit": "ns",
            "range": "± 477.5995651271612"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 116374.87182617188,
            "unit": "ns",
            "range": "± 286.3162479676962"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 110618.01382211539,
            "unit": "ns",
            "range": "± 168.67534805149813"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 115447.2383626302,
            "unit": "ns",
            "range": "± 205.27525832500004"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 104193.76307896206,
            "unit": "ns",
            "range": "± 185.20231659528034"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 95603.02821568081,
            "unit": "ns",
            "range": "± 274.77792827688484"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734543036642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 124616.17954799107,
            "unit": "ns",
            "range": "± 286.6041679204421"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 105318.61485072544,
            "unit": "ns",
            "range": "± 185.61874521842256"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 94117.7751813616,
            "unit": "ns",
            "range": "± 206.24868400344752"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 130467.67014723558,
            "unit": "ns",
            "range": "± 530.1636748083812"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 116163.7224469866,
            "unit": "ns",
            "range": "± 156.4256918348176"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 109970.66214425223,
            "unit": "ns",
            "range": "± 296.017330350987"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 114926.26691545759,
            "unit": "ns",
            "range": "± 206.6718984460062"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 102730.78002929688,
            "unit": "ns",
            "range": "± 835.2266573621264"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 94365.98772321429,
            "unit": "ns",
            "range": "± 474.89244374568705"
          }
        ]
      }
    ],
    "Operations.RawStringOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132639030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 14816.435294596355,
            "unit": "ns",
            "range": "± 94.47031746751409"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 20867.645955012395,
            "unit": "ns",
            "range": "± 62.23709210726049"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 18398.01870727539,
            "unit": "ns",
            "range": "± 22.366514890939868"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 19889.976309640067,
            "unit": "ns",
            "range": "± 106.39092173710817"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 16036.700192260741,
            "unit": "ns",
            "range": "± 121.48324991209529"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10745.905465698243,
            "unit": "ns",
            "range": "± 64.65198556143768"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 23705.533628191268,
            "unit": "ns",
            "range": "± 33.80530274701759"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 21846.329234531946,
            "unit": "ns",
            "range": "± 67.75085535183324"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 26406.58366699219,
            "unit": "ns",
            "range": "± 248.9055532408708"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 26748.1680254255,
            "unit": "ns",
            "range": "± 165.1544381890471"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 21939.715114339193,
            "unit": "ns",
            "range": "± 146.1171765020887"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 26771.108364868163,
            "unit": "ns",
            "range": "± 165.60410716734407"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 25098.915174211776,
            "unit": "ns",
            "range": "± 167.85152025377164"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 26941.963915311375,
            "unit": "ns",
            "range": "± 110.07342525922692"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 16321.20508066813,
            "unit": "ns",
            "range": "± 15.58166762704221"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 11050.980593872071,
            "unit": "ns",
            "range": "± 63.9937004452282"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 26990.272666422527,
            "unit": "ns",
            "range": "± 167.21266068029854"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 27124.480870564777,
            "unit": "ns",
            "range": "± 43.895254244510504"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 33351.030102539065,
            "unit": "ns",
            "range": "± 201.26691508370874"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 32949.65606689453,
            "unit": "ns",
            "range": "± 152.70987850466912"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 15014.184030151368,
            "unit": "ns",
            "range": "± 87.55152195832815"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 20030.226927537184,
            "unit": "ns",
            "range": "± 96.66258304701852"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 18108.268931070965,
            "unit": "ns",
            "range": "± 35.9250112337681"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 18985.955738612585,
            "unit": "ns",
            "range": "± 37.45660220563274"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 16185.63039855957,
            "unit": "ns",
            "range": "± 129.11212601003973"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 12123.172189331055,
            "unit": "ns",
            "range": "± 71.73718003803029"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 25848.575937906902,
            "unit": "ns",
            "range": "± 151.72851752805664"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 22483.849430964543,
            "unit": "ns",
            "range": "± 16.997879760971536"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 26911.922853597007,
            "unit": "ns",
            "range": "± 164.68100666620697"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 32917.95057326097,
            "unit": "ns",
            "range": "± 114.5120843144981"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734134247792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 15040.84912516276,
            "unit": "ns",
            "range": "± 23.585042481079213"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 19540.92861821101,
            "unit": "ns",
            "range": "± 53.69212439264756"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 18225.098035176594,
            "unit": "ns",
            "range": "± 37.88709339374149"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 19460.130341593424,
            "unit": "ns",
            "range": "± 161.55860936968878"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 16288.35307820638,
            "unit": "ns",
            "range": "± 46.856450850652664"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10556.828758748372,
            "unit": "ns",
            "range": "± 83.58258297465694"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 21140.534297688802,
            "unit": "ns",
            "range": "± 172.27878763634945"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 21586.798568725586,
            "unit": "ns",
            "range": "± 52.065576740190075"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 27743.20965677897,
            "unit": "ns",
            "range": "± 150.2632606930286"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 28531.93859354655,
            "unit": "ns",
            "range": "± 135.10381573634342"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 21395.852436610632,
            "unit": "ns",
            "range": "± 158.13741997950402"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 31432.833251953125,
            "unit": "ns",
            "range": "± 86.05449422239947"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 25553.994467599052,
            "unit": "ns",
            "range": "± 92.73541936305972"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 26730.906129964194,
            "unit": "ns",
            "range": "± 200.26982052778573"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 16457.352444966633,
            "unit": "ns",
            "range": "± 18.64974478032745"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10767.130409240723,
            "unit": "ns",
            "range": "± 20.10667250516548"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 26527.085503133138,
            "unit": "ns",
            "range": "± 184.82046858944003"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 27427.782153320313,
            "unit": "ns",
            "range": "± 147.10154968404245"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 33533.240110270184,
            "unit": "ns",
            "range": "± 325.3444029786193"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 33121.719746907555,
            "unit": "ns",
            "range": "± 75.02687157576486"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 15173.479718889508,
            "unit": "ns",
            "range": "± 122.36040817383642"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19957.889942714148,
            "unit": "ns",
            "range": "± 159.23867414031795"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 17974.324526468914,
            "unit": "ns",
            "range": "± 28.958586089582848"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 19055.313226318358,
            "unit": "ns",
            "range": "± 149.29912050474513"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 16453.594492594402,
            "unit": "ns",
            "range": "± 131.2964822803046"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10541.59819139753,
            "unit": "ns",
            "range": "± 70.16661803304315"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 22145.633270263672,
            "unit": "ns",
            "range": "± 40.209250159713356"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 21240.92807006836,
            "unit": "ns",
            "range": "± 136.83212188907405"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 32362.708849225724,
            "unit": "ns",
            "range": "± 135.07724733469584"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 32329.27238246373,
            "unit": "ns",
            "range": "± 67.77894808910607"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377553391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 16411.416407658504,
            "unit": "ns",
            "range": "± 52.23875082391392"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 20579.89013264974,
            "unit": "ns",
            "range": "± 172.68709500094968"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 18101.901111309344,
            "unit": "ns",
            "range": "± 29.30059075712781"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 19521.95375061035,
            "unit": "ns",
            "range": "± 193.27562176698385"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 16329.01357014974,
            "unit": "ns",
            "range": "± 47.31578637564349"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10456.176090494791,
            "unit": "ns",
            "range": "± 85.75280535037415"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 22310.687093098957,
            "unit": "ns",
            "range": "± 23.173970114852846"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 21968.597871907554,
            "unit": "ns",
            "range": "± 177.1799320184066"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 30027.247102864585,
            "unit": "ns",
            "range": "± 180.9668091956291"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 27556.961475078875,
            "unit": "ns",
            "range": "± 73.64646409857157"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 21348.52862548828,
            "unit": "ns",
            "range": "± 181.09318677743363"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 28106.921310424805,
            "unit": "ns",
            "range": "± 51.89961884233096"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 26094.15082397461,
            "unit": "ns",
            "range": "± 193.18122021091492"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 26961.936048235213,
            "unit": "ns",
            "range": "± 170.55074721531452"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 16137.421095628004,
            "unit": "ns",
            "range": "± 13.119065252079793"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 11059.624062856039,
            "unit": "ns",
            "range": "± 21.767063030626126"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 27131.303755696616,
            "unit": "ns",
            "range": "± 199.5235497249134"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 27211.90727887835,
            "unit": "ns",
            "range": "± 55.29276852472154"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 32890.69977315267,
            "unit": "ns",
            "range": "± 151.04610989253393"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 32989.87679617746,
            "unit": "ns",
            "range": "± 142.61731686753805"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 14950.251561846051,
            "unit": "ns",
            "range": "± 53.33384994676696"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19904.803990681965,
            "unit": "ns",
            "range": "± 161.27068304952428"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 18704.41196148212,
            "unit": "ns",
            "range": "± 68.2097117302401"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 19083.050396259016,
            "unit": "ns",
            "range": "± 18.34921218792383"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 16008.23681992751,
            "unit": "ns",
            "range": "± 13.575563086528453"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10495.943244934082,
            "unit": "ns",
            "range": "± 22.472439075431005"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 21237.61361694336,
            "unit": "ns",
            "range": "± 175.5265739217866"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 22514.2323651995,
            "unit": "ns",
            "range": "± 22.098016104254448"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 32425.85320027669,
            "unit": "ns",
            "range": "± 358.80020240337933"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 32512.53461129325,
            "unit": "ns",
            "range": "± 106.98643642665856"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734393022733,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 15785.271538367639,
            "unit": "ns",
            "range": "± 41.84283323708321"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 20994.47863667806,
            "unit": "ns",
            "range": "± 218.52413022034165"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 19535.715911865234,
            "unit": "ns",
            "range": "± 79.86828610020888"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 19837.85546170748,
            "unit": "ns",
            "range": "± 37.62431587503663"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 16012.67082977295,
            "unit": "ns",
            "range": "± 17.196367746455895"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10628.717747614934,
            "unit": "ns",
            "range": "± 44.2053412031602"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 21771.404002888998,
            "unit": "ns",
            "range": "± 232.54201136889122"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 21958.485575749324,
            "unit": "ns",
            "range": "± 113.25303834875818"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 26228.270198277063,
            "unit": "ns",
            "range": "± 178.44737708662322"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 27451.05304189829,
            "unit": "ns",
            "range": "± 105.83570115754715"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 20948.109255981446,
            "unit": "ns",
            "range": "± 228.7532419858281"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 26028.998731340682,
            "unit": "ns",
            "range": "± 185.28450843688864"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 25664.731553141275,
            "unit": "ns",
            "range": "± 264.5603989305927"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 27176.948321024578,
            "unit": "ns",
            "range": "± 50.302212321897265"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 16626.692611694336,
            "unit": "ns",
            "range": "± 164.40582155544305"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10806.801755777995,
            "unit": "ns",
            "range": "± 96.2002006234238"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 26298.348407999674,
            "unit": "ns",
            "range": "± 237.2488291502508"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 27650.08837236677,
            "unit": "ns",
            "range": "± 152.3350095214131"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 34305.549625651045,
            "unit": "ns",
            "range": "± 199.6502154536361"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 33908.482096354164,
            "unit": "ns",
            "range": "± 120.75840739743819"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 15510.642216609074,
            "unit": "ns",
            "range": "± 25.06190444704581"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 20278.355860392254,
            "unit": "ns",
            "range": "± 45.09295671836551"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 18416.947194417316,
            "unit": "ns",
            "range": "± 245.6656724765653"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 18766.425231933594,
            "unit": "ns",
            "range": "± 28.541567737904494"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 15810.136934916178,
            "unit": "ns",
            "range": "± 45.51878962195215"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10582.958417619977,
            "unit": "ns",
            "range": "± 46.14980639260769"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 22479.674207051594,
            "unit": "ns",
            "range": "± 22.22489964375003"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 22242.892042032876,
            "unit": "ns",
            "range": "± 237.46545040756297"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 32989.720275878906,
            "unit": "ns",
            "range": "± 208.29716198736622"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 28250.380263264975,
            "unit": "ns",
            "range": "± 234.75412608381365"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483976318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 15645.715799967447,
            "unit": "ns",
            "range": "± 35.943403251353594"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 19720.975078037805,
            "unit": "ns",
            "range": "± 35.58113566204535"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 18820.10755450909,
            "unit": "ns",
            "range": "± 45.56228511431539"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 19934.07323811849,
            "unit": "ns",
            "range": "± 168.96402011772173"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 16006.634142194476,
            "unit": "ns",
            "range": "± 138.6659368530547"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10549.954828898111,
            "unit": "ns",
            "range": "± 8.012323826091523"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 20712.342404174804,
            "unit": "ns",
            "range": "± 149.90477882807406"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 21965.443005371093,
            "unit": "ns",
            "range": "± 181.2469911628488"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 26198.688714163643,
            "unit": "ns",
            "range": "± 206.77953353511955"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 26261.928028361002,
            "unit": "ns",
            "range": "± 249.02145644186643"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 21265.288249424524,
            "unit": "ns",
            "range": "± 159.16735657146774"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 27079.639995029993,
            "unit": "ns",
            "range": "± 162.65918343893088"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 25822.864939371746,
            "unit": "ns",
            "range": "± 183.3263943121622"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 26782.290237426758,
            "unit": "ns",
            "range": "± 181.74303394951863"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 16059.928844745342,
            "unit": "ns",
            "range": "± 31.04213583546921"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10392.75321490948,
            "unit": "ns",
            "range": "± 12.537515880272975"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 28331.21694437663,
            "unit": "ns",
            "range": "± 156.16724514397478"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 28052.136039733887,
            "unit": "ns",
            "range": "± 27.375695034574857"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 32044.165196736652,
            "unit": "ns",
            "range": "± 125.46181523946"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 33470.56165020283,
            "unit": "ns",
            "range": "± 137.97471145085242"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 15117.724068196614,
            "unit": "ns",
            "range": "± 74.00874824726769"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 20237.724291120256,
            "unit": "ns",
            "range": "± 21.431537718907418"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 18195.322296142578,
            "unit": "ns",
            "range": "± 42.10509706903656"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 19004.20320892334,
            "unit": "ns",
            "range": "± 42.431461893813506"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 16142.023681640625,
            "unit": "ns",
            "range": "± 28.234285343372317"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10822.095826212566,
            "unit": "ns",
            "range": "± 70.90049691783841"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 21235.55812072754,
            "unit": "ns",
            "range": "± 34.68351353108279"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 25492.719592285157,
            "unit": "ns",
            "range": "± 199.79261657622735"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 26102.334810384116,
            "unit": "ns",
            "range": "± 163.85886426725003"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 32067.904370117187,
            "unit": "ns",
            "range": "± 150.90055170794378"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734543266416,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 16181.341508992513,
            "unit": "ns",
            "range": "± 136.67665572552804"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 20327.800541178385,
            "unit": "ns",
            "range": "± 224.86733208979572"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 19124.678196498327,
            "unit": "ns",
            "range": "± 162.97662986252675"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 20558.973571777344,
            "unit": "ns",
            "range": "± 199.53291437518033"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 16349.826692853656,
            "unit": "ns",
            "range": "± 93.22821064414232"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 11538.088607201209,
            "unit": "ns",
            "range": "± 73.84426491257315"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 22423.5266091483,
            "unit": "ns",
            "range": "± 122.22093063558009"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 22760.08263244629,
            "unit": "ns",
            "range": "± 76.11092179994954"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 26683.93581063407,
            "unit": "ns",
            "range": "± 371.2684800163443"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 27290.95460510254,
            "unit": "ns",
            "range": "± 264.478807549736"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 21646.920986468976,
            "unit": "ns",
            "range": "± 130.61260111168247"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 26804.86119588216,
            "unit": "ns",
            "range": "± 287.35632435375874"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 26045.515678914388,
            "unit": "ns",
            "range": "± 214.15568994850412"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 26694.772430419922,
            "unit": "ns",
            "range": "± 114.14250264619254"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 16560.37110493978,
            "unit": "ns",
            "range": "± 168.17791015694968"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 11549.413628133138,
            "unit": "ns",
            "range": "± 99.41575753506443"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 28145.865115356446,
            "unit": "ns",
            "range": "± 253.8394491633894"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 27618.732688395183,
            "unit": "ns",
            "range": "± 266.3782559689125"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 34129.18052978515,
            "unit": "ns",
            "range": "± 464.8050647613318"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 32537.358243815102,
            "unit": "ns",
            "range": "± 208.33003204780417"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 15440.724512736002,
            "unit": "ns",
            "range": "± 43.99323673457361"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19975.545815101035,
            "unit": "ns",
            "range": "± 77.39384459600417"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 18817.45678274972,
            "unit": "ns",
            "range": "± 126.13681317819612"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 19357.902389526367,
            "unit": "ns",
            "range": "± 95.84166931234356"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 16440.97188313802,
            "unit": "ns",
            "range": "± 181.86163840029295"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10989.748328072685,
            "unit": "ns",
            "range": "± 83.86650930153108"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 22020.5815952846,
            "unit": "ns",
            "range": "± 229.90330730722442"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 21711.96893310547,
            "unit": "ns",
            "range": "± 223.41073494073962"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 27530.382162911552,
            "unit": "ns",
            "range": "± 244.81075936857604"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 33268.32442626953,
            "unit": "ns",
            "range": "± 247.79526453587118"
          }
        ]
      }
    ],
    "Operations.RawStringOperations (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132894734,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 14190.856170654297,
            "unit": "ns",
            "range": "± 59.698165024225624"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 19829.666137695312,
            "unit": "ns",
            "range": "± 51.475343341726614"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 17955.359293619793,
            "unit": "ns",
            "range": "± 52.95280302024586"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 19024.96815999349,
            "unit": "ns",
            "range": "± 48.47473453285859"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 15410.353088378906,
            "unit": "ns",
            "range": "± 27.429690445915956"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10720.738220214844,
            "unit": "ns",
            "range": "± 14.410873567350258"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 20945.088782677285,
            "unit": "ns",
            "range": "± 28.362168463281616"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 21592.736409505207,
            "unit": "ns",
            "range": "± 124.18133226331179"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 25483.131103515625,
            "unit": "ns",
            "range": "± 55.43374074512074"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 24779.19452373798,
            "unit": "ns",
            "range": "± 72.56248243161208"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 19510.250142415363,
            "unit": "ns",
            "range": "± 57.684996566460704"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 25361.64540608724,
            "unit": "ns",
            "range": "± 141.99010157213297"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 24582.774759928387,
            "unit": "ns",
            "range": "± 71.77452318070188"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 25568.619995117188,
            "unit": "ns",
            "range": "± 83.59390437350005"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 15401.177266438803,
            "unit": "ns",
            "range": "± 31.13002431252897"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 11288.613789876303,
            "unit": "ns",
            "range": "± 12.723038606284291"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 25873.30067952474,
            "unit": "ns",
            "range": "± 55.86399992254943"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 25733.23211669922,
            "unit": "ns",
            "range": "± 68.08279536082067"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 30641.578776041668,
            "unit": "ns",
            "range": "± 133.4146146627055"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 31932.542724609375,
            "unit": "ns",
            "range": "± 122.85599896999551"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 13986.86054774693,
            "unit": "ns",
            "range": "± 34.72442404248113"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19603.813825334822,
            "unit": "ns",
            "range": "± 47.705557132436404"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 17740.870666503906,
            "unit": "ns",
            "range": "± 28.491239095919813"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 19475.808950570914,
            "unit": "ns",
            "range": "± 35.652154548449964"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 15583.068612905648,
            "unit": "ns",
            "range": "± 22.186352458538984"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10844.31645711263,
            "unit": "ns",
            "range": "± 18.40795812290787"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 20333.325782189004,
            "unit": "ns",
            "range": "± 61.63356737611477"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 21445.936148507255,
            "unit": "ns",
            "range": "± 23.439738784355942"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 24576.917090782754,
            "unit": "ns",
            "range": "± 29.540867696991114"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 25333.93320719401,
            "unit": "ns",
            "range": "± 42.01859251477097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734134522222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 14410.805130004883,
            "unit": "ns",
            "range": "± 13.722598851759246"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 20643.283284505207,
            "unit": "ns",
            "range": "± 53.202843190026925"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 17327.760096958704,
            "unit": "ns",
            "range": "± 102.44200602535993"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 18359.964254628056,
            "unit": "ns",
            "range": "± 283.58765333303035"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 15170.851571219308,
            "unit": "ns",
            "range": "± 24.864297534262594"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10823.018973214286,
            "unit": "ns",
            "range": "± 19.987633760468498"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 21179.86579308143,
            "unit": "ns",
            "range": "± 19.184252527718588"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 21437.848017765926,
            "unit": "ns",
            "range": "± 26.37409274655251"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 24738.243756975447,
            "unit": "ns",
            "range": "± 171.75954455583556"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 24856.20615641276,
            "unit": "ns",
            "range": "± 158.7638886465811"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 20208.417619977678,
            "unit": "ns",
            "range": "± 49.446141204795296"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 25219.130379813058,
            "unit": "ns",
            "range": "± 123.67416480103084"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 24681.93097795759,
            "unit": "ns",
            "range": "± 78.85138431862549"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 27526.58905029297,
            "unit": "ns",
            "range": "± 55.21935055937221"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 15613.481038411459,
            "unit": "ns",
            "range": "± 38.76295217267269"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10655.656080979566,
            "unit": "ns",
            "range": "± 22.109646274886632"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 26257.420756022137,
            "unit": "ns",
            "range": "± 196.93883280465698"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 25705.318341936385,
            "unit": "ns",
            "range": "± 63.863658663721665"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 30629.60392878606,
            "unit": "ns",
            "range": "± 153.0901434814624"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 31070.79366048177,
            "unit": "ns",
            "range": "± 139.56504279882776"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 14351.021106426533,
            "unit": "ns",
            "range": "± 19.138744922274057"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19858.829752604168,
            "unit": "ns",
            "range": "± 42.44846374950137"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 17483.726065499442,
            "unit": "ns",
            "range": "± 31.735534449951064"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 18144.23566545759,
            "unit": "ns",
            "range": "± 24.45565134023688"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 15370.878483698918,
            "unit": "ns",
            "range": "± 14.440240928243231"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10945.575205485025,
            "unit": "ns",
            "range": "± 17.285335329199057"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 21435.202730618992,
            "unit": "ns",
            "range": "± 17.42614661090422"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 21200.045122419084,
            "unit": "ns",
            "range": "± 29.54435307658792"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 24344.34262789213,
            "unit": "ns",
            "range": "± 44.98906600053809"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 24967.958068847656,
            "unit": "ns",
            "range": "± 39.51239714407638"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377750329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 13943.020411900112,
            "unit": "ns",
            "range": "± 20.34710318639752"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 20675.770874023438,
            "unit": "ns",
            "range": "± 58.26772265557886"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 17597.731454031808,
            "unit": "ns",
            "range": "± 29.962048565143913"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 17766.26150948661,
            "unit": "ns",
            "range": "± 38.22249936637857"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 15643.003438313803,
            "unit": "ns",
            "range": "± 22.941494278471616"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10735.584728534404,
            "unit": "ns",
            "range": "± 14.496904935530251"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 21205.86111886161,
            "unit": "ns",
            "range": "± 34.8849174097553"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 20956.97774251302,
            "unit": "ns",
            "range": "± 39.012973090728046"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 24743.55245736929,
            "unit": "ns",
            "range": "± 44.216588387071695"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 25056.417643229168,
            "unit": "ns",
            "range": "± 37.93831184542328"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 19331.224365234375,
            "unit": "ns",
            "range": "± 48.04504323750633"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 25355.560709635418,
            "unit": "ns",
            "range": "± 73.09297410270696"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 30422.18505859375,
            "unit": "ns",
            "range": "± 467.64341730163693"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 26608.167157854354,
            "unit": "ns",
            "range": "± 63.78682046498642"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 15210.182542067309,
            "unit": "ns",
            "range": "± 29.22152561127783"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10564.391326904297,
            "unit": "ns",
            "range": "± 18.636728982185584"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 26871.49434407552,
            "unit": "ns",
            "range": "± 50.956252270074074"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 25598.85973249163,
            "unit": "ns",
            "range": "± 34.286684031007816"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 30014.52901204427,
            "unit": "ns",
            "range": "± 117.89946238902745"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 29894.576009114582,
            "unit": "ns",
            "range": "± 89.7491953739944"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 14022.1681867327,
            "unit": "ns",
            "range": "± 13.371625994640095"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19797.932870047433,
            "unit": "ns",
            "range": "± 24.096644088601767"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 17658.84307861328,
            "unit": "ns",
            "range": "± 47.611735015107506"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 18129.520743233817,
            "unit": "ns",
            "range": "± 11.994446965816499"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 15403.18102155413,
            "unit": "ns",
            "range": "± 20.03469350527577"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 11160.525868733725,
            "unit": "ns",
            "range": "± 11.323497464000548"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 25094.466654459637,
            "unit": "ns",
            "range": "± 56.82027787454911"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 25502.533162434895,
            "unit": "ns",
            "range": "± 128.40077126782575"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 26308.013814290363,
            "unit": "ns",
            "range": "± 210.42225556514077"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 26138.17378452846,
            "unit": "ns",
            "range": "± 61.26144175275532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734393224314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 13649.194101186898,
            "unit": "ns",
            "range": "± 19.568107893141743"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 19926.47465297154,
            "unit": "ns",
            "range": "± 17.799468908520844"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 17120.816911969865,
            "unit": "ns",
            "range": "± 27.087578311672747"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 19566.723850795202,
            "unit": "ns",
            "range": "± 22.52270009985228"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 15543.861389160156,
            "unit": "ns",
            "range": "± 12.789044312110944"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 11295.469883510044,
            "unit": "ns",
            "range": "± 9.301897769500115"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 20215.0386265346,
            "unit": "ns",
            "range": "± 27.139908285365806"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 21227.14162190755,
            "unit": "ns",
            "range": "± 18.373560551032696"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 24055.38101196289,
            "unit": "ns",
            "range": "± 25.13829609295302"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 24305.52259172712,
            "unit": "ns",
            "range": "± 105.83033841484128"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 19560.61055501302,
            "unit": "ns",
            "range": "± 38.8656949995646"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 25604.069401667668,
            "unit": "ns",
            "range": "± 52.01639292251766"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 24271.27431233724,
            "unit": "ns",
            "range": "± 39.98154886835585"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 25221.183471679688,
            "unit": "ns",
            "range": "± 65.24913958500022"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 15236.163940429688,
            "unit": "ns",
            "range": "± 20.32046876344317"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10539.14291381836,
            "unit": "ns",
            "range": "± 13.263177524110466"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 26380.56162516276,
            "unit": "ns",
            "range": "± 70.54821762203333"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 25298.55464054988,
            "unit": "ns",
            "range": "± 19.19688337108539"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 30584.750162760418,
            "unit": "ns",
            "range": "± 131.95169325845015"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 30601.668294270832,
            "unit": "ns",
            "range": "± 125.8552268286388"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 13730.533701578775,
            "unit": "ns",
            "range": "± 20.720423720204746"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19698.847307477678,
            "unit": "ns",
            "range": "± 33.14100150347345"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 17717.936197916668,
            "unit": "ns",
            "range": "± 38.448262797566635"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 17930.811157226562,
            "unit": "ns",
            "range": "± 19.88482031800699"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 15330.632019042969,
            "unit": "ns",
            "range": "± 17.63966001970525"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10815.785573323568,
            "unit": "ns",
            "range": "± 29.89102950656974"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 21354.88311767578,
            "unit": "ns",
            "range": "± 28.23767629599258"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 21901.451110839844,
            "unit": "ns",
            "range": "± 38.965950337551305"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 24776.76493326823,
            "unit": "ns",
            "range": "± 44.16140416083478"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 24983.184814453125,
            "unit": "ns",
            "range": "± 28.75945586911681"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734484105566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 14024.126903827373,
            "unit": "ns",
            "range": "± 23.07115661058818"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 20347.38739013672,
            "unit": "ns",
            "range": "± 56.38237058581914"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 17746.588570731026,
            "unit": "ns",
            "range": "± 26.17498303295166"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 18842.63153076172,
            "unit": "ns",
            "range": "± 33.52488883927097"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 15428.783976236979,
            "unit": "ns",
            "range": "± 18.96824773864323"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10745.003861647387,
            "unit": "ns",
            "range": "± 25.283485592756353"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 20260.40213448661,
            "unit": "ns",
            "range": "± 20.73201984391418"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 20908.334115835336,
            "unit": "ns",
            "range": "± 43.16422190323078"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 24627.3441859654,
            "unit": "ns",
            "range": "± 25.499668575421012"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 25620.704650878906,
            "unit": "ns",
            "range": "± 28.472496229246016"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 19642.53387451172,
            "unit": "ns",
            "range": "± 40.61363039249005"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 26201.012093680245,
            "unit": "ns",
            "range": "± 38.97236125124976"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 24494.63108607701,
            "unit": "ns",
            "range": "± 58.791921444923545"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 25104.28924560547,
            "unit": "ns",
            "range": "± 91.15976341051484"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 15644.690763033354,
            "unit": "ns",
            "range": "± 14.77403063595884"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10540.046146937779,
            "unit": "ns",
            "range": "± 17.616441628275762"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 26750.495256696428,
            "unit": "ns",
            "range": "± 33.96004553407235"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 25259.830932617188,
            "unit": "ns",
            "range": "± 65.51833416507621"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 29856.472574869793,
            "unit": "ns",
            "range": "± 118.57987513302426"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 30220.93241373698,
            "unit": "ns",
            "range": "± 120.0734050381042"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 13923.500111897787,
            "unit": "ns",
            "range": "± 16.992623595522904"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 20238.090108235676,
            "unit": "ns",
            "range": "± 107.5187606226246"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 17837.83242361886,
            "unit": "ns",
            "range": "± 25.578835188568657"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 18792.59076799665,
            "unit": "ns",
            "range": "± 184.57435502509745"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 15433.856855119977,
            "unit": "ns",
            "range": "± 23.756466464608494"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 11171.090698242188,
            "unit": "ns",
            "range": "± 12.317287485248272"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 21308.255004882812,
            "unit": "ns",
            "range": "± 28.670752052987467"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 21078.233846028645,
            "unit": "ns",
            "range": "± 23.46556817324017"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 26424.862452915735,
            "unit": "ns",
            "range": "± 41.46879864571416"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 24914.374215262276,
            "unit": "ns",
            "range": "± 18.28731857828785"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734543468245,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 14446.362609863281,
            "unit": "ns",
            "range": "± 24.11528973252565"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 20567.926788330078,
            "unit": "ns",
            "range": "± 12.41456170157057"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 17845.631190708704,
            "unit": "ns",
            "range": "± 75.11734220034067"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 18615.93475341797,
            "unit": "ns",
            "range": "± 30.228548888246582"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 16864.2573765346,
            "unit": "ns",
            "range": "± 32.39955471555759"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10667.301823542668,
            "unit": "ns",
            "range": "± 18.769905544225775"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 20896.517240084133,
            "unit": "ns",
            "range": "± 20.619961279107443"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 20399.495544433594,
            "unit": "ns",
            "range": "± 21.635264471243012"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 24877.560424804688,
            "unit": "ns",
            "range": "± 57.165287805399174"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 25540.148707798548,
            "unit": "ns",
            "range": "± 42.89189655733403"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 19974.57951136998,
            "unit": "ns",
            "range": "± 48.976984096350115"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 24976.209411621094,
            "unit": "ns",
            "range": "± 52.75047789556869"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 24429.953002929688,
            "unit": "ns",
            "range": "± 47.39407230120496"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 25062.384134928387,
            "unit": "ns",
            "range": "± 57.582640738233614"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 15419.803074428013,
            "unit": "ns",
            "range": "± 9.319832046484233"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10933.611958821615,
            "unit": "ns",
            "range": "± 18.211689758109777"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 25438.528677133414,
            "unit": "ns",
            "range": "± 30.91675699913287"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 26225.245314378004,
            "unit": "ns",
            "range": "± 91.559410653201"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 29658.832223074776,
            "unit": "ns",
            "range": "± 116.72963389001949"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 30268.42258998326,
            "unit": "ns",
            "range": "± 103.87433856740611"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 13706.449672154018,
            "unit": "ns",
            "range": "± 22.780250378281877"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 20323.714599609375,
            "unit": "ns",
            "range": "± 29.887614861604266"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 17541.136169433594,
            "unit": "ns",
            "range": "± 22.256823515405983"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 18017.378452845984,
            "unit": "ns",
            "range": "± 118.9936732509053"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 15443.438066755023,
            "unit": "ns",
            "range": "± 20.548474107156082"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10892.37060546875,
            "unit": "ns",
            "range": "± 13.992729042058263"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 21786.664287860578,
            "unit": "ns",
            "range": "± 20.97493295028018"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 21017.806889460637,
            "unit": "ns",
            "range": "± 17.181199655501242"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 24610.078938802082,
            "unit": "ns",
            "range": "± 38.381785359070506"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 27342.469889322918,
            "unit": "ns",
            "range": "± 24.363227859543183"
          }
        ]
      }
    ],
    "Operations.ScriptOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132336949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 9854.840510777065,
            "unit": "ns",
            "range": "± 33.30379853387269"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 11057.504404340472,
            "unit": "ns",
            "range": "± 64.83220432644347"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 10101.784058634441,
            "unit": "ns",
            "range": "± 73.19725860530193"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 8859.947564932016,
            "unit": "ns",
            "range": "± 26.036963805982523"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9023.409473125752,
            "unit": "ns",
            "range": "± 37.341734763535364"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 135611.45148577009,
            "unit": "ns",
            "range": "± 2029.6768371556336"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 22130.353085327148,
            "unit": "ns",
            "range": "± 134.37911506034195"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 21702.86043875558,
            "unit": "ns",
            "range": "± 96.16124680933231"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 160193.8178187779,
            "unit": "ns",
            "range": "± 813.1466057630686"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 53446.244232177734,
            "unit": "ns",
            "range": "± 392.81181455428504"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 135223.9639718192,
            "unit": "ns",
            "range": "± 1031.4104622996804"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 22784.674863179524,
            "unit": "ns",
            "range": "± 54.874451378674706"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 22380.991120402017,
            "unit": "ns",
            "range": "± 132.6220194943431"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 165964.2878092448,
            "unit": "ns",
            "range": "± 444.5766450609944"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 53785.498299734936,
            "unit": "ns",
            "range": "± 367.16451815407623"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734133987484,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 10240.210862295968,
            "unit": "ns",
            "range": "± 60.14076187493657"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 10428.857485961915,
            "unit": "ns",
            "range": "± 22.212184976590734"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 10487.622997029623,
            "unit": "ns",
            "range": "± 76.31071949865635"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 8531.725386301676,
            "unit": "ns",
            "range": "± 19.210967820059917"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9202.68070765904,
            "unit": "ns",
            "range": "± 10.119569659447441"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 133107.83612060547,
            "unit": "ns",
            "range": "± 485.3019475074923"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 22145.736157735188,
            "unit": "ns",
            "range": "± 38.46842604798907"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 21950.554501342773,
            "unit": "ns",
            "range": "± 141.10199713579627"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 158376.25659179688,
            "unit": "ns",
            "range": "± 628.7820165712996"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 53434.73804931641,
            "unit": "ns",
            "range": "± 401.62350354587585"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 134637.42819010417,
            "unit": "ns",
            "range": "± 834.5715121922802"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 23046.632611955916,
            "unit": "ns",
            "range": "± 164.33895493282049"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 22645.6143751878,
            "unit": "ns",
            "range": "± 93.18173116638317"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 159047.97391183037,
            "unit": "ns",
            "range": "± 657.4601251708646"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 55844.17161342076,
            "unit": "ns",
            "range": "± 486.3052518711932"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377277411,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 9730.387713623048,
            "unit": "ns",
            "range": "± 115.41523305730557"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 10176.111178588868,
            "unit": "ns",
            "range": "± 94.01784480768971"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 10212.982479388897,
            "unit": "ns",
            "range": "± 22.986353271500942"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 8547.91544518104,
            "unit": "ns",
            "range": "± 39.400983401220856"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 8836.289097086588,
            "unit": "ns",
            "range": "± 45.929693351444975"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 136317.3741280692,
            "unit": "ns",
            "range": "± 1155.8485345974443"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 22253.61912536621,
            "unit": "ns",
            "range": "± 21.512402187524906"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 21810.797614542644,
            "unit": "ns",
            "range": "± 140.01527561389335"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 158904.26250751203,
            "unit": "ns",
            "range": "± 305.09063511383295"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 55388.12537434896,
            "unit": "ns",
            "range": "± 299.2535217107499"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 133331.71499023438,
            "unit": "ns",
            "range": "± 1613.5153395754437"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 22566.459854125977,
            "unit": "ns",
            "range": "± 139.98982480902416"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 22477.11849568685,
            "unit": "ns",
            "range": "± 125.63193912709393"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 159817.3315080915,
            "unit": "ns",
            "range": "± 486.4112132573592"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 55963.74225792518,
            "unit": "ns",
            "range": "± 369.9045068262312"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392753563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 10089.433714548746,
            "unit": "ns",
            "range": "± 26.250576357522025"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 11073.170500437418,
            "unit": "ns",
            "range": "± 27.286875331846932"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 11403.628280639648,
            "unit": "ns",
            "range": "± 94.54103326678933"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 8655.02058207194,
            "unit": "ns",
            "range": "± 80.77097564433865"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9569.324822998047,
            "unit": "ns",
            "range": "± 101.77099640324332"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 134575.71845703124,
            "unit": "ns",
            "range": "± 883.5702545187777"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 23447.365306599935,
            "unit": "ns",
            "range": "± 130.3250243888201"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 20295.03770798903,
            "unit": "ns",
            "range": "± 70.21922368509065"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 161039.87132045202,
            "unit": "ns",
            "range": "± 377.3658811248533"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 57078.101998465405,
            "unit": "ns",
            "range": "± 408.31727854601576"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 131945.15623121994,
            "unit": "ns",
            "range": "± 448.410374938448"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 21910.292323185848,
            "unit": "ns",
            "range": "± 32.30932462802606"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 20312.19806925456,
            "unit": "ns",
            "range": "± 137.7198614949921"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 159500.1410929362,
            "unit": "ns",
            "range": "± 462.8722736501154"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 54931.80075073242,
            "unit": "ns",
            "range": "± 334.07623663935556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483683371,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 10598.598031616211,
            "unit": "ns",
            "range": "± 100.95616447481571"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 10657.204770914714,
            "unit": "ns",
            "range": "± 93.74650373187757"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 11213.790354047504,
            "unit": "ns",
            "range": "± 71.30680724009859"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 9461.39616721017,
            "unit": "ns",
            "range": "± 76.74405298746817"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9593.179401397705,
            "unit": "ns",
            "range": "± 25.94133347547109"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 133063.00856526694,
            "unit": "ns",
            "range": "± 354.6138346272458"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 22721.896970476424,
            "unit": "ns",
            "range": "± 134.60712836433245"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 20523.660119628905,
            "unit": "ns",
            "range": "± 161.82183969333605"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 163355.94372558594,
            "unit": "ns",
            "range": "± 1342.9360477846385"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 54969.43194814829,
            "unit": "ns",
            "range": "± 167.65188003658363"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 136278.57624162946,
            "unit": "ns",
            "range": "± 1889.3183121278971"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 22975.66880493164,
            "unit": "ns",
            "range": "± 173.6509084294676"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 21794.18051656087,
            "unit": "ns",
            "range": "± 19.286647549488844"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 161280.9762056791,
            "unit": "ns",
            "range": "± 532.6065950286863"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 57070.830186110274,
            "unit": "ns",
            "range": "± 301.3115920257948"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542986832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 10102.892674763998,
            "unit": "ns",
            "range": "± 17.43339587344982"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 10818.991310628255,
            "unit": "ns",
            "range": "± 92.91974827055239"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 10820.78896077474,
            "unit": "ns",
            "range": "± 10.833384631840424"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 8491.15951131185,
            "unit": "ns",
            "range": "± 75.62354925243645"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9012.115968976703,
            "unit": "ns",
            "range": "± 87.31013239854775"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 134270.4632098858,
            "unit": "ns",
            "range": "± 964.5670071685231"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 23390.12287902832,
            "unit": "ns",
            "range": "± 162.1995547170278"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 20704.53762512207,
            "unit": "ns",
            "range": "± 167.45362341673768"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 159595.8348388672,
            "unit": "ns",
            "range": "± 214.17731581223228"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 55084.13647054036,
            "unit": "ns",
            "range": "± 381.0362543694372"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 135528.10414632162,
            "unit": "ns",
            "range": "± 216.93714017465427"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 22832.54929860433,
            "unit": "ns",
            "range": "± 30.468712227786426"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 20075.30219523112,
            "unit": "ns",
            "range": "± 24.306120412481487"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 160458.07623697916,
            "unit": "ns",
            "range": "± 1553.5632925028465"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 53964.80864461263,
            "unit": "ns",
            "range": "± 466.9089581642338"
          }
        ]
      }
    ],
    "Operations.ScriptOperations (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132506791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 14962.163543701172,
            "unit": "ns",
            "range": "± 20.865464506445914"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 17004.867045084637,
            "unit": "ns",
            "range": "± 9.020929582278443"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 16922.799428304035,
            "unit": "ns",
            "range": "± 12.72076179754839"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 7609.786605834961,
            "unit": "ns",
            "range": "± 8.559674711351132"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 8713.236127580914,
            "unit": "ns",
            "range": "± 11.413996569231339"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 80612.78849283855,
            "unit": "ns",
            "range": "± 351.25903098291565"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 28096.456146240234,
            "unit": "ns",
            "range": "± 23.59048171680894"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 26186.29368373326,
            "unit": "ns",
            "range": "± 43.39186191610288"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 90038.7479654948,
            "unit": "ns",
            "range": "± 289.50970890614934"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 43432.80334472656,
            "unit": "ns",
            "range": "± 83.1304316565591"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 79794.52863420759,
            "unit": "ns",
            "range": "± 162.6400550997845"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 28677.786690848214,
            "unit": "ns",
            "range": "± 24.843006832496876"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 26012.32640193059,
            "unit": "ns",
            "range": "± 12.902700154558469"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 91026.44566127232,
            "unit": "ns",
            "range": "± 434.4659237116468"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 47447.80927385603,
            "unit": "ns",
            "range": "± 149.65611813288575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734134136857,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 14983.118262657752,
            "unit": "ns",
            "range": "± 30.113016760661832"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 19103.44955444336,
            "unit": "ns",
            "range": "± 667.473164201069"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 17466.821758563703,
            "unit": "ns",
            "range": "± 10.094360294341337"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 7595.259475708008,
            "unit": "ns",
            "range": "± 10.682568345162803"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 8755.695016043526,
            "unit": "ns",
            "range": "± 16.81453438018015"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 81492.62044270833,
            "unit": "ns",
            "range": "± 184.0483162917246"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 28504.79014078776,
            "unit": "ns",
            "range": "± 35.99624197517166"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 26025.238444010418,
            "unit": "ns",
            "range": "± 33.689570917300856"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 87733.25631277902,
            "unit": "ns",
            "range": "± 259.79762569612996"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 43570.51565987723,
            "unit": "ns",
            "range": "± 75.30738570858323"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 81120.15474759616,
            "unit": "ns",
            "range": "± 121.17796148454485"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 28627.978163499098,
            "unit": "ns",
            "range": "± 25.667893863624396"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 26030.28302873884,
            "unit": "ns",
            "range": "± 12.225677077029156"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 91532.38199869792,
            "unit": "ns",
            "range": "± 503.8857274711647"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 43735.65804617746,
            "unit": "ns",
            "range": "± 120.664980646142"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377427250,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 14866.491190592447,
            "unit": "ns",
            "range": "± 45.975383058772834"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 17376.28913292518,
            "unit": "ns",
            "range": "± 8.736196261877238"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 17239.56553141276,
            "unit": "ns",
            "range": "± 24.120247691642803"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 7670.127054850261,
            "unit": "ns",
            "range": "± 24.378069821814815"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 8850.31988961356,
            "unit": "ns",
            "range": "± 8.104573948321224"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 80556.15670340402,
            "unit": "ns",
            "range": "± 184.45561855995356"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 28375.38888113839,
            "unit": "ns",
            "range": "± 35.63600053623655"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 26237.288716634113,
            "unit": "ns",
            "range": "± 37.902057069669546"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 89937.80314127605,
            "unit": "ns",
            "range": "± 384.85633247474215"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 43874.14489746094,
            "unit": "ns",
            "range": "± 87.18507230594794"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 81589.84723772321,
            "unit": "ns",
            "range": "± 90.92266230808198"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 28695.375882662258,
            "unit": "ns",
            "range": "± 18.6546886408914"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 25944.760131835938,
            "unit": "ns",
            "range": "± 10.753499366961481"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 90699.39226422991,
            "unit": "ns",
            "range": "± 419.07433403752685"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 43443.70683942522,
            "unit": "ns",
            "range": "± 82.92761106680065"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734392919683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 15018.622471736027,
            "unit": "ns",
            "range": "± 16.142910071278767"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 17780.468045748195,
            "unit": "ns",
            "range": "± 28.910896859793638"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 18157.061971028645,
            "unit": "ns",
            "range": "± 75.43830307642236"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 7916.733805338542,
            "unit": "ns",
            "range": "± 9.902811811281365"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9023.173086983817,
            "unit": "ns",
            "range": "± 20.007691930099558"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 80980.88419596355,
            "unit": "ns",
            "range": "± 190.01650862586337"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 28176.50324503581,
            "unit": "ns",
            "range": "± 25.286509667514142"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 33248.65976969401,
            "unit": "ns",
            "range": "± 30.276623761841314"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 90227.82674153645,
            "unit": "ns",
            "range": "± 295.5534890049679"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 44157.44105747768,
            "unit": "ns",
            "range": "± 134.4878911795512"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 80477.001953125,
            "unit": "ns",
            "range": "± 114.41307755976779"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 28268.852820763223,
            "unit": "ns",
            "range": "± 13.490811844070127"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 26284.569021371695,
            "unit": "ns",
            "range": "± 13.889638064840096"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 86989.04767717634,
            "unit": "ns",
            "range": "± 233.56473355490257"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 45413.61389160156,
            "unit": "ns",
            "range": "± 55.868236021219694"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734483855720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 15547.916353665865,
            "unit": "ns",
            "range": "± 17.46088406436958"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 17576.82118733724,
            "unit": "ns",
            "range": "± 19.926458335972104"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 17427.57797241211,
            "unit": "ns",
            "range": "± 26.82642547299325"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 8039.764404296875,
            "unit": "ns",
            "range": "± 16.12274364477239"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 10139.377797444662,
            "unit": "ns",
            "range": "± 16.98226529270167"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 79850.87105887277,
            "unit": "ns",
            "range": "± 185.88346047778973"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 28588.233511788505,
            "unit": "ns",
            "range": "± 22.23733526961657"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 26535.66716512044,
            "unit": "ns",
            "range": "± 14.911883129187798"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 89658.8985188802,
            "unit": "ns",
            "range": "± 755.9609028739861"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 44466.50789701022,
            "unit": "ns",
            "range": "± 46.489707913757776"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 79987.58370535714,
            "unit": "ns",
            "range": "± 189.13092074548695"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 28521.004486083984,
            "unit": "ns",
            "range": "± 43.5613449272151"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 27014.74110921224,
            "unit": "ns",
            "range": "± 22.94265435396845"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 89000.70434570312,
            "unit": "ns",
            "range": "± 371.9656870105087"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 45243.52600097656,
            "unit": "ns",
            "range": "± 131.20080353077088"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734543133626,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 15448.499843052456,
            "unit": "ns",
            "range": "± 19.32337854222512"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 18436.705134465145,
            "unit": "ns",
            "range": "± 25.294346710954617"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 18180.882481166296,
            "unit": "ns",
            "range": "± 32.31962257881296"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 7827.845588097205,
            "unit": "ns",
            "range": "± 17.828577009925105"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9846.222279866537,
            "unit": "ns",
            "range": "± 50.05903672057289"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 83758.38669996995,
            "unit": "ns",
            "range": "± 180.71397456991045"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 28224.399893624442,
            "unit": "ns",
            "range": "± 38.00410031008319"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 26329.776939978965,
            "unit": "ns",
            "range": "± 15.719485772011858"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 86835.2765764509,
            "unit": "ns",
            "range": "± 164.6078022252354"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 47341.59458705357,
            "unit": "ns",
            "range": "± 112.75624462356548"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 80762.00052897136,
            "unit": "ns",
            "range": "± 125.18760566089883"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 28413.586777907152,
            "unit": "ns",
            "range": "± 18.935358635216996"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 26265.190007136418,
            "unit": "ns",
            "range": "± 10.090254489083602"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 88601.46014873798,
            "unit": "ns",
            "range": "± 144.11172021672283"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 44297.980143229164,
            "unit": "ns",
            "range": "± 113.89936305845266"
          }
        ]
      }
    ],
    "Operations.HashObjectOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734132960917,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 132049.5407063802,
            "unit": "ns",
            "range": "± 1765.7819295576637"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 9261.21183980306,
            "unit": "ns",
            "range": "± 81.64589258247013"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 8254.04911334698,
            "unit": "ns",
            "range": "± 29.940228941531185"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 7903.879172691932,
            "unit": "ns",
            "range": "± 35.84254580891323"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 9925.944778442383,
            "unit": "ns",
            "range": "± 64.12422307654022"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 11186.45803615025,
            "unit": "ns",
            "range": "± 74.48537939020294"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 7445.992502339681,
            "unit": "ns",
            "range": "± 38.320718563955886"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 7553.418674214681,
            "unit": "ns",
            "range": "± 52.536283770436945"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 9578.145228794643,
            "unit": "ns",
            "range": "± 40.6286547095637"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 10395.576411946615,
            "unit": "ns",
            "range": "± 83.08160463591267"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 9171.571921212333,
            "unit": "ns",
            "range": "± 88.1752227552261"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 13252.466153971354,
            "unit": "ns",
            "range": "± 73.49541163426808"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 10458.570088313176,
            "unit": "ns",
            "range": "± 27.31176561538661"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 9428.90762201945,
            "unit": "ns",
            "range": "± 8.737023247775793"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 7784.958447969877,
            "unit": "ns",
            "range": "± 22.587060637131106"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 148482.6137858073,
            "unit": "ns",
            "range": "± 1259.9102356594622"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 43704.67446027483,
            "unit": "ns",
            "range": "± 213.23520532292036"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 45502.187299455916,
            "unit": "ns",
            "range": "± 285.1263186846996"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 49900.58187430246,
            "unit": "ns",
            "range": "± 273.71302430097694"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 87490.61834309896,
            "unit": "ns",
            "range": "± 623.8343752943433"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 110350.54670817057,
            "unit": "ns",
            "range": "± 510.62453284661393"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 44834.53278459822,
            "unit": "ns",
            "range": "± 196.02776755329097"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 39901.98810424805,
            "unit": "ns",
            "range": "± 516.7497219253725"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 48731.83440348307,
            "unit": "ns",
            "range": "± 294.5428039708339"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 81670.07393101284,
            "unit": "ns",
            "range": "± 440.8947538258065"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 60019.53112792969,
            "unit": "ns",
            "range": "± 629.5419390682257"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 13323.874215932992,
            "unit": "ns",
            "range": "± 29.82627574030274"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 74316.45236002604,
            "unit": "ns",
            "range": "± 548.9440176477644"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 43077.64760044643,
            "unit": "ns",
            "range": "± 127.96029302132548"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 46374.31073201497,
            "unit": "ns",
            "range": "± 449.3071112254425"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 136836.74014718193,
            "unit": "ns",
            "range": "± 197.91231058722718"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 45064.47432657878,
            "unit": "ns",
            "range": "± 169.37738167859743"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 44603.184735107425,
            "unit": "ns",
            "range": "± 157.30329662525364"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 55436.65355137416,
            "unit": "ns",
            "range": "± 114.37251922839502"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 71602.41117506761,
            "unit": "ns",
            "range": "± 181.1149101796601"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 100828.00686848958,
            "unit": "ns",
            "range": "± 251.45980742950724"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 47282.92847987584,
            "unit": "ns",
            "range": "± 187.73403111525909"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 39043.39669799805,
            "unit": "ns",
            "range": "± 78.64171147533467"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 47556.95196533203,
            "unit": "ns",
            "range": "± 288.83167763503644"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 70709.06467285156,
            "unit": "ns",
            "range": "± 454.9253488185122"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 55851.94170939128,
            "unit": "ns",
            "range": "± 272.45333300103323"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 13310.827342442104,
            "unit": "ns",
            "range": "± 38.997204566939416"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 65330.3880452474,
            "unit": "ns",
            "range": "± 232.9291762774466"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 44198.65678914388,
            "unit": "ns",
            "range": "± 219.2797055033353"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 47464.13401285807,
            "unit": "ns",
            "range": "± 167.7570209884607"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734134615255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 130850.46634615384,
            "unit": "ns",
            "range": "± 403.530139361655"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 9152.122744750977,
            "unit": "ns",
            "range": "± 89.94185708896998"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 8041.478967519907,
            "unit": "ns",
            "range": "± 4.414544111095751"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 7886.881243896484,
            "unit": "ns",
            "range": "± 33.24767759757552"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 10230.179346720377,
            "unit": "ns",
            "range": "± 66.4495086974743"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 11050.872403826032,
            "unit": "ns",
            "range": "± 16.13762939480599"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 7433.928165142353,
            "unit": "ns",
            "range": "± 11.972405372841143"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 7594.169723510742,
            "unit": "ns",
            "range": "± 7.4175783122896"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 9015.369426472982,
            "unit": "ns",
            "range": "± 70.18005484096703"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 10955.251419067383,
            "unit": "ns",
            "range": "± 85.42773687294839"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 9331.612150828043,
            "unit": "ns",
            "range": "± 36.10654270303548"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 13142.290683746338,
            "unit": "ns",
            "range": "± 18.19598177688433"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 9681.657997131348,
            "unit": "ns",
            "range": "± 89.08812298954359"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 9535.795061551607,
            "unit": "ns",
            "range": "± 30.623209494835873"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 8140.607756551107,
            "unit": "ns",
            "range": "± 105.69933016491842"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 151396.8809640067,
            "unit": "ns",
            "range": "± 1029.4494826723972"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 49453.53301188151,
            "unit": "ns",
            "range": "± 227.91414368446596"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 44157.97162882487,
            "unit": "ns",
            "range": "± 190.8549332497136"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 54935.36186523437,
            "unit": "ns",
            "range": "± 288.70372121232015"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 85585.89001464844,
            "unit": "ns",
            "range": "± 1823.9984403368817"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 112216.0226789202,
            "unit": "ns",
            "range": "± 550.3918144472946"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 43692.63138991136,
            "unit": "ns",
            "range": "± 105.40161346929881"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 38760.784920828686,
            "unit": "ns",
            "range": "± 283.94915985156763"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 52822.61626180013,
            "unit": "ns",
            "range": "± 337.2618902140515"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 81084.2402256557,
            "unit": "ns",
            "range": "± 724.2204042665813"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 57538.03908691406,
            "unit": "ns",
            "range": "± 290.98390558330414"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 13279.55683680943,
            "unit": "ns",
            "range": "± 51.172702630819636"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 74568.26368931362,
            "unit": "ns",
            "range": "± 269.77366053884015"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 51237.59279581706,
            "unit": "ns",
            "range": "± 153.73538132549209"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 44662.08667428153,
            "unit": "ns",
            "range": "± 102.8979934183339"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 135693.203133138,
            "unit": "ns",
            "range": "± 573.5429806571111"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 42977.73941853841,
            "unit": "ns",
            "range": "± 173.56304012790008"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 43168.64846567007,
            "unit": "ns",
            "range": "± 131.56871134267124"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 55956.45936701848,
            "unit": "ns",
            "range": "± 96.57100224673638"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 74373.4502040318,
            "unit": "ns",
            "range": "± 321.9385587192885"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 108182.70327148438,
            "unit": "ns",
            "range": "± 538.0334674258604"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 44577.12827351888,
            "unit": "ns",
            "range": "± 134.1510056309465"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 39323.19331258138,
            "unit": "ns",
            "range": "± 275.4031859318211"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 48226.558030192056,
            "unit": "ns",
            "range": "± 243.63451529422193"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 71286.48572591147,
            "unit": "ns",
            "range": "± 354.3821158402961"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 55739.91121128627,
            "unit": "ns",
            "range": "± 368.25230884863896"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 13186.601328168597,
            "unit": "ns",
            "range": "± 36.59663864159555"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 65048.05232747396,
            "unit": "ns",
            "range": "± 333.64987243147687"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 45193.87700108119,
            "unit": "ns",
            "range": "± 271.6160564238074"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 46383.52359008789,
            "unit": "ns",
            "range": "± 62.397762472769074"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734377921318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 140065.32720947266,
            "unit": "ns",
            "range": "± 373.5459334528882"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 9163.691018676758,
            "unit": "ns",
            "range": "± 41.56706909741989"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 8055.186254648062,
            "unit": "ns",
            "range": "± 6.521201589860332"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 8069.244928632464,
            "unit": "ns",
            "range": "± 53.0264548347966"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 10023.612834385463,
            "unit": "ns",
            "range": "± 67.50275024399726"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 10943.009137471518,
            "unit": "ns",
            "range": "± 5.23593647522178"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 7426.952805110386,
            "unit": "ns",
            "range": "± 33.15294884284215"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 7485.094405873617,
            "unit": "ns",
            "range": "± 40.04407324159967"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 9163.714755718525,
            "unit": "ns",
            "range": "± 7.306680398538396"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 10474.73973642985,
            "unit": "ns",
            "range": "± 73.4200999986696"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 8750.123606168307,
            "unit": "ns",
            "range": "± 44.089341217103126"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 13169.651035308838,
            "unit": "ns",
            "range": "± 35.112418108431115"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 10334.201622517903,
            "unit": "ns",
            "range": "± 96.83751956015283"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 9551.30991414388,
            "unit": "ns",
            "range": "± 78.46012074577128"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 7512.176001957485,
            "unit": "ns",
            "range": "± 41.0355878275936"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 148520.51632254463,
            "unit": "ns",
            "range": "± 800.5368873034084"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 44013.1412494366,
            "unit": "ns",
            "range": "± 111.84055003681446"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 42950.516106238734,
            "unit": "ns",
            "range": "± 184.0712916058837"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 49679.35961507161,
            "unit": "ns",
            "range": "± 413.07999060089503"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 81858.57802734376,
            "unit": "ns",
            "range": "± 658.8462957195937"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 116798.84073311942,
            "unit": "ns",
            "range": "± 654.8661536315143"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 45308.140779622394,
            "unit": "ns",
            "range": "± 635.1394692693204"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 40289.17634684245,
            "unit": "ns",
            "range": "± 529.1172619037354"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 48580.7065386091,
            "unit": "ns",
            "range": "± 289.0949288338194"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 80415.8279663086,
            "unit": "ns",
            "range": "± 772.8999127135845"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 60026.033107212614,
            "unit": "ns",
            "range": "± 457.88779215621645"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 13280.000632222493,
            "unit": "ns",
            "range": "± 98.78674903477526"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 75581.07906087239,
            "unit": "ns",
            "range": "± 359.432427480618"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 42687.39781901042,
            "unit": "ns",
            "range": "± 154.70603277504688"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 45507.48094831194,
            "unit": "ns",
            "range": "± 79.66257785222896"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 133299.81729329427,
            "unit": "ns",
            "range": "± 576.0160983481752"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 42900.637225341794,
            "unit": "ns",
            "range": "± 206.46905353288074"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 43792.63558146159,
            "unit": "ns",
            "range": "± 165.3546465790475"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 50785.34969388522,
            "unit": "ns",
            "range": "± 57.07542030145086"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 76521.02379557291,
            "unit": "ns",
            "range": "± 584.2398099771858"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 101012.71968180338,
            "unit": "ns",
            "range": "± 336.4927510986663"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 45280.243028913224,
            "unit": "ns",
            "range": "± 125.83261009814407"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 39705.22477620443,
            "unit": "ns",
            "range": "± 80.9501289209368"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 47952.98322941707,
            "unit": "ns",
            "range": "± 236.14326571878908"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 70500.01690673828,
            "unit": "ns",
            "range": "± 599.4303700780401"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 55257.6111101423,
            "unit": "ns",
            "range": "± 241.89171038489093"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 13215.820724487305,
            "unit": "ns",
            "range": "± 30.538947012996683"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 64948.26868489583,
            "unit": "ns",
            "range": "± 302.6397203044981"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 44449.16861833845,
            "unit": "ns",
            "range": "± 92.59689774468836"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 44996.90498046875,
            "unit": "ns",
            "range": "± 195.85507709651566"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734393389791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 133693.42501126803,
            "unit": "ns",
            "range": "± 270.9960385057336"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 10926.186759440105,
            "unit": "ns",
            "range": "± 117.67798663643796"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 8386.620781531701,
            "unit": "ns",
            "range": "± 30.33517908223759"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 8237.233208211263,
            "unit": "ns",
            "range": "± 104.13436660654739"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 10214.791303362164,
            "unit": "ns",
            "range": "± 77.64008419943725"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 11084.595880780902,
            "unit": "ns",
            "range": "± 69.65220048869094"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 8466.946003214518,
            "unit": "ns",
            "range": "± 98.47671208402994"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 8546.693412193885,
            "unit": "ns",
            "range": "± 45.02619096919319"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 9386.979064941406,
            "unit": "ns",
            "range": "± 9.830435986349308"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 11968.659385172527,
            "unit": "ns",
            "range": "± 96.7418065226291"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 9271.566780677209,
            "unit": "ns",
            "range": "± 18.725035203123255"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 13271.66728101458,
            "unit": "ns",
            "range": "± 72.98957620993527"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 10827.478407796223,
            "unit": "ns",
            "range": "± 77.19007525387967"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 10794.347698505107,
            "unit": "ns",
            "range": "± 50.88827825421079"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 8159.31241431603,
            "unit": "ns",
            "range": "± 27.359934383901443"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 151893.3078531901,
            "unit": "ns",
            "range": "± 1051.550790004139"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 44451.0116007487,
            "unit": "ns",
            "range": "± 417.59477738355696"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 47476.314479282926,
            "unit": "ns",
            "range": "± 288.024668568063"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 53519.919285700875,
            "unit": "ns",
            "range": "± 178.739747271875"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 83225.75995279948,
            "unit": "ns",
            "range": "± 713.0340095209277"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 108827.19243977865,
            "unit": "ns",
            "range": "± 545.1197277587464"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 44745.4819922814,
            "unit": "ns",
            "range": "± 76.62809455491148"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 39144.1285142165,
            "unit": "ns",
            "range": "± 48.52905124102143"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 50866.71139119466,
            "unit": "ns",
            "range": "± 322.6601154409032"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 81545.98564801898,
            "unit": "ns",
            "range": "± 401.34629055277657"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 57489.80249430339,
            "unit": "ns",
            "range": "± 306.6142999486406"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 13470.971206665039,
            "unit": "ns",
            "range": "± 68.90009828753655"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 76696.88185471755,
            "unit": "ns",
            "range": "± 181.36000828383627"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 45645.53793334961,
            "unit": "ns",
            "range": "± 110.28919873406151"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 50935.21778971354,
            "unit": "ns",
            "range": "± 221.4237570440768"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 133420.34831891741,
            "unit": "ns",
            "range": "± 239.21001809833973"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 44989.05336914062,
            "unit": "ns",
            "range": "± 155.93776988975293"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 44580.946271623885,
            "unit": "ns",
            "range": "± 89.97271392147275"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 50689.567403157555,
            "unit": "ns",
            "range": "± 213.94891663572525"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 75194.17003173828,
            "unit": "ns",
            "range": "± 397.1060139128289"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 106331.927734375,
            "unit": "ns",
            "range": "± 424.97368164692546"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 52611.46059163412,
            "unit": "ns",
            "range": "± 119.48341716671992"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 38359.765268961586,
            "unit": "ns",
            "range": "± 38.96243342629687"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 50972.194852701825,
            "unit": "ns",
            "range": "± 227.96266186399023"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 69248.43533121745,
            "unit": "ns",
            "range": "± 369.25418454416933"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 57314.57287394206,
            "unit": "ns",
            "range": "± 358.84896490772246"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 13241.23494544396,
            "unit": "ns",
            "range": "± 39.317480338491684"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 64571.18165690104,
            "unit": "ns",
            "range": "± 279.87578770432697"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 45402.18411254883,
            "unit": "ns",
            "range": "± 188.32973945646987"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 47129.08881632487,
            "unit": "ns",
            "range": "± 153.87785761886374"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734484309245,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 132126.18744303385,
            "unit": "ns",
            "range": "± 1879.61574238476"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 9652.712161254884,
            "unit": "ns",
            "range": "± 81.62423652068568"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 8662.22061665853,
            "unit": "ns",
            "range": "± 92.70696356076071"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 8807.352758135114,
            "unit": "ns",
            "range": "± 85.42562272167106"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 10899.213327261117,
            "unit": "ns",
            "range": "± 41.77788205675592"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 10831.871938069662,
            "unit": "ns",
            "range": "± 9.340266242715106"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 7936.071559651693,
            "unit": "ns",
            "range": "± 111.33209349130101"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 7936.779958871694,
            "unit": "ns",
            "range": "± 20.368017874433"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 9662.816357421874,
            "unit": "ns",
            "range": "± 65.41826609683046"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 10927.358548990886,
            "unit": "ns",
            "range": "± 83.75708714894107"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 9119.91070429484,
            "unit": "ns",
            "range": "± 6.702026802542183"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 13220.589799063546,
            "unit": "ns",
            "range": "± 106.19229918400252"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 9894.51456451416,
            "unit": "ns",
            "range": "± 72.91578367358025"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 9849.122329711914,
            "unit": "ns",
            "range": "± 4.632767070730715"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 7907.455957685198,
            "unit": "ns",
            "range": "± 67.43719927028614"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 149734.863663737,
            "unit": "ns",
            "range": "± 1526.2438577990786"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 46087.50047302246,
            "unit": "ns",
            "range": "± 106.35837442119288"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 46971.45606079102,
            "unit": "ns",
            "range": "± 239.84543394349845"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 50143.24976094564,
            "unit": "ns",
            "range": "± 656.4776626122606"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 82390.95156424386,
            "unit": "ns",
            "range": "± 643.0590113570066"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 113229.56861223493,
            "unit": "ns",
            "range": "± 417.8750555946825"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 46625.97926228841,
            "unit": "ns",
            "range": "± 268.14339574684686"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 40613.04667154948,
            "unit": "ns",
            "range": "± 290.5773291595352"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 48944.78420316256,
            "unit": "ns",
            "range": "± 115.13939620440631"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 82276.46139090402,
            "unit": "ns",
            "range": "± 488.4515085005882"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 59457.826009114586,
            "unit": "ns",
            "range": "± 619.0369226798946"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 13216.604806753305,
            "unit": "ns",
            "range": "± 56.03512799723493"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 73299.5489827474,
            "unit": "ns",
            "range": "± 443.0213006036811"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 49035.66515677316,
            "unit": "ns",
            "range": "± 299.8981653359364"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 46067.94711303711,
            "unit": "ns",
            "range": "± 114.7429599928305"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 132258.38080705915,
            "unit": "ns",
            "range": "± 331.4410210431471"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 45679.82600504557,
            "unit": "ns",
            "range": "± 168.7109475327549"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 46137.61870117187,
            "unit": "ns",
            "range": "± 221.21901123805966"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 48711.16895345052,
            "unit": "ns",
            "range": "± 161.3495962662104"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 74003.10817464192,
            "unit": "ns",
            "range": "± 201.64637298765405"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 99770.64415690103,
            "unit": "ns",
            "range": "± 393.1633740384646"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 45653.4544514974,
            "unit": "ns",
            "range": "± 219.80418805420243"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 39522.983834402905,
            "unit": "ns",
            "range": "± 142.70534904925165"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 51106.98257039388,
            "unit": "ns",
            "range": "± 451.3247551078065"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 72504.33964029948,
            "unit": "ns",
            "range": "± 462.47373825297734"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 54666.01689453125,
            "unit": "ns",
            "range": "± 389.1499501715149"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 13213.124412536621,
            "unit": "ns",
            "range": "± 54.642974863075786"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 68860.10750732422,
            "unit": "ns",
            "range": "± 319.14524440135716"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 48279.36775861467,
            "unit": "ns",
            "range": "± 153.36997330367515"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 45509.182781982425,
            "unit": "ns",
            "range": "± 194.95721155534537"
          }
        ]
      }
    ],
    "Operations.HashObjectOperations (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3",
          "message": "Add BDN tests:  Operations.RawStringOperations and Operations.CustomOperations (#876)\n\n* Added two more BDN perf tests: Operations.CustomOperations and Operations.RawStringOperations\r\n\r\n* Added BDN Charts to the badges\r\n\r\n* Added link to BDN charts to website\r\n\r\n* Setting results array to 70 so we have plenty of space for different results (in a single BDN result set).\r\n\r\n* Added ScriptOperations and conrresponding expected values in Config file\r\n\r\n---------\r\n\r\nCo-authored-by: Badrish Chandramouli <badrishc@microsoft.com>",
          "timestamp": "2024-12-13T15:18:56-08:00",
          "tree_id": "57912268bf5280aad0e440f06d42d6f0248c6523",
          "url": "https://github.com/microsoft/garnet/commit/3d3e8d6ee656f9c091cbd6c37a7d30db9c45f8b3"
        },
        "date": 1734133254596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 110489.42972819011,
            "unit": "ns",
            "range": "± 223.35897961574173"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 10601.69916788737,
            "unit": "ns",
            "range": "± 52.03221879335324"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 7863.757651192801,
            "unit": "ns",
            "range": "± 56.62073714339424"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 8216.988830566406,
            "unit": "ns",
            "range": "± 16.07693491017271"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 11611.951555524554,
            "unit": "ns",
            "range": "± 21.527745344500627"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 12780.42696439303,
            "unit": "ns",
            "range": "± 7.13121827778979"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 7190.104620797293,
            "unit": "ns",
            "range": "± 4.060285270062505"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 7428.389485677083,
            "unit": "ns",
            "range": "± 14.961872604921068"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 8407.438307542066,
            "unit": "ns",
            "range": "± 15.996078329854267"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 9342.504374186197,
            "unit": "ns",
            "range": "± 15.63584214075571"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 11428.544362386068,
            "unit": "ns",
            "range": "± 4.499240888042529"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 9152.65840802874,
            "unit": "ns",
            "range": "± 32.805026349869166"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 10830.60048421224,
            "unit": "ns",
            "range": "± 40.898518477277"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 12358.497009277344,
            "unit": "ns",
            "range": "± 19.23932682104836"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 7303.404780796596,
            "unit": "ns",
            "range": "± 7.284389905070189"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 115153.48161969866,
            "unit": "ns",
            "range": "± 392.98742697168916"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 41961.37172154018,
            "unit": "ns",
            "range": "± 143.39446833535797"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 42854.20880998884,
            "unit": "ns",
            "range": "± 92.45001617776934"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 46849.13757324219,
            "unit": "ns",
            "range": "± 105.93068675449814"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 67188.88113839286,
            "unit": "ns",
            "range": "± 295.12371755937323"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 96519.32721819196,
            "unit": "ns",
            "range": "± 271.272639735563"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 42446.30839029948,
            "unit": "ns",
            "range": "± 50.55960606207696"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 36975.96435546875,
            "unit": "ns",
            "range": "± 76.60610878602361"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 45687.169189453125,
            "unit": "ns",
            "range": "± 219.10119635997307"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 63527.586263020836,
            "unit": "ns",
            "range": "± 125.76961783977347"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 53027.845982142855,
            "unit": "ns",
            "range": "± 96.13583218938591"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 9135.09052821568,
            "unit": "ns",
            "range": "± 19.536171162171122"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 59869.764927455355,
            "unit": "ns",
            "range": "± 179.42780133792053"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 44367.47349330357,
            "unit": "ns",
            "range": "± 127.62754745040876"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 40975.223013070914,
            "unit": "ns",
            "range": "± 59.7835206276425"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 97708.75478891227,
            "unit": "ns",
            "range": "± 143.30390367893514"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 41753.52294921875,
            "unit": "ns",
            "range": "± 106.20671759095826"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 38883.288138253345,
            "unit": "ns",
            "range": "± 113.47470757287167"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 45820.36917550223,
            "unit": "ns",
            "range": "± 86.89280426953597"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 60037.20011393229,
            "unit": "ns",
            "range": "± 766.8113249135868"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 86336.34294782366,
            "unit": "ns",
            "range": "± 138.90641811365722"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 43558.131103515625,
            "unit": "ns",
            "range": "± 120.3467075661461"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 35401.75258091518,
            "unit": "ns",
            "range": "± 66.8511653055571"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 45121.060650165266,
            "unit": "ns",
            "range": "± 63.25950849836349"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 54010.76354980469,
            "unit": "ns",
            "range": "± 125.08112716261013"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 54850.51531110491,
            "unit": "ns",
            "range": "± 33.34684507333669"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 9094.465964181083,
            "unit": "ns",
            "range": "± 30.738823696518995"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 50680.37414550781,
            "unit": "ns",
            "range": "± 103.57674721590152"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 43135.181100027905,
            "unit": "ns",
            "range": "± 101.811146145499"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 43194.05604771205,
            "unit": "ns",
            "range": "± 59.41132024406252"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "badrishc@microsoft.com",
            "name": "Badrish Chandramouli",
            "username": "badrishc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635cd58ab0fe9423a13f1a0c38b715e61dafde22",
          "message": "Revert \"[helm-chart] Add helm-docs to the helm chart workflow (#862)\" (#881)\n\nThis reverts commit f1ce0dafecaba15335e8e0767a6eeb441b72e56c.",
          "timestamp": "2024-12-13T15:46:32-08:00",
          "tree_id": "013e7e35462603ca9b981e1384552f47be440c50",
          "url": "https://github.com/microsoft/garnet/commit/635cd58ab0fe9423a13f1a0c38b715e61dafde22"
        },
        "date": 1734134870954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 97933.30078125,
            "unit": "ns",
            "range": "± 225.86521041317465"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 10148.410914494441,
            "unit": "ns",
            "range": "± 54.40240408451228"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 7529.920069376628,
            "unit": "ns",
            "range": "± 37.77063017626564"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 8043.315778459822,
            "unit": "ns",
            "range": "± 8.501976151114182"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 11719.681549072266,
            "unit": "ns",
            "range": "± 64.36499981070962"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 13251.913706461588,
            "unit": "ns",
            "range": "± 88.80743565644188"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 7367.218290056501,
            "unit": "ns",
            "range": "± 14.192166096487535"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 7633.177947998047,
            "unit": "ns",
            "range": "± 15.782041075897565"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 8426.82118733724,
            "unit": "ns",
            "range": "± 15.01875734614907"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 9385.242462158203,
            "unit": "ns",
            "range": "± 19.28789885399269"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 11430.725860595703,
            "unit": "ns",
            "range": "± 9.99799842539024"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 9273.4011332194,
            "unit": "ns",
            "range": "± 18.334055955580848"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 9885.7346089681,
            "unit": "ns",
            "range": "± 75.83339720451"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 12218.954467773438,
            "unit": "ns",
            "range": "± 22.779071296039056"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 7467.85265604655,
            "unit": "ns",
            "range": "± 5.601367742746436"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 113494.47428385417,
            "unit": "ns",
            "range": "± 421.9002441307937"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 41315.50821940104,
            "unit": "ns",
            "range": "± 59.5981425627972"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 40815.38303920201,
            "unit": "ns",
            "range": "± 49.4661077163688"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 45973.60135591947,
            "unit": "ns",
            "range": "± 70.0380154541413"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 68947.74739583333,
            "unit": "ns",
            "range": "± 335.4342306565449"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 95718.18806966145,
            "unit": "ns",
            "range": "± 392.95917061250503"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 43719.86650739397,
            "unit": "ns",
            "range": "± 101.48890096256225"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 34618.02629743303,
            "unit": "ns",
            "range": "± 83.99243677662152"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 43315.03470284598,
            "unit": "ns",
            "range": "± 61.998335478524304"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 64600.360107421875,
            "unit": "ns",
            "range": "± 140.4522089435867"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 54336.802978515625,
            "unit": "ns",
            "range": "± 120.87732673065457"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 9357.106475830078,
            "unit": "ns",
            "range": "± 14.566572314960107"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 58741.2548828125,
            "unit": "ns",
            "range": "± 327.88199472692366"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 44777.049037388395,
            "unit": "ns",
            "range": "± 93.63991899591593"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 43134.46004231771,
            "unit": "ns",
            "range": "± 60.93633022978825"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 97444.09220377605,
            "unit": "ns",
            "range": "± 314.2761189528818"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 41807.60052020733,
            "unit": "ns",
            "range": "± 72.52260063081627"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 39212.67618815104,
            "unit": "ns",
            "range": "± 91.11779855107784"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 46880.44657389323,
            "unit": "ns",
            "range": "± 185.00899126222342"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 58286.02512904576,
            "unit": "ns",
            "range": "± 104.85038433212111"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 85849.98474121094,
            "unit": "ns",
            "range": "± 106.20169728945366"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 43112.62773786272,
            "unit": "ns",
            "range": "± 74.40909609266568"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 34524.736328125,
            "unit": "ns",
            "range": "± 77.5539601178284"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 44646.16139729818,
            "unit": "ns",
            "range": "± 34.21394756031912"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 53024.595424107145,
            "unit": "ns",
            "range": "± 154.69666562010906"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 54205.27547200521,
            "unit": "ns",
            "range": "± 125.19050555901477"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 9300.203880896936,
            "unit": "ns",
            "range": "± 12.641346124792914"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 48866.225022536055,
            "unit": "ns",
            "range": "± 56.15536763906542"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 45345.249720982145,
            "unit": "ns",
            "range": "± 62.326958446159814"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 43143.83108956473,
            "unit": "ns",
            "range": "± 56.342308970493605"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "babykart@gmail.com",
            "name": "babykart",
            "username": "babykart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad521ea6d85fa24ed8c209651b54d0b87b2434e",
          "message": "[helm-chart] Add helm-docs to the helm chart workflow (#883)\n\n* Standardize the variables\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add Helm chart artifacts build directory\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Add helm-docs to the helm chart workflow\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n* Create a PR to update charts/garnet/README.md\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: babykart <babykart@gmail.com>",
          "timestamp": "2024-12-16T11:21:10-08:00",
          "tree_id": "67ea2f25ee5b507cb48ef54f8edc68e2f900019c",
          "url": "https://github.com/microsoft/garnet/commit/fad521ea6d85fa24ed8c209651b54d0b87b2434e"
        },
        "date": 1734378143029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 100970.64493815105,
            "unit": "ns",
            "range": "± 281.3538342805135"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 10550.745391845703,
            "unit": "ns",
            "range": "± 63.15000521561217"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 8076.069582425631,
            "unit": "ns",
            "range": "± 24.324425914335844"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 8012.752641950335,
            "unit": "ns",
            "range": "± 10.32507254715908"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 14416.331892747145,
            "unit": "ns",
            "range": "± 42.21392464649954"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 13285.841369628906,
            "unit": "ns",
            "range": "± 56.60280966868314"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 7359.978778545673,
            "unit": "ns",
            "range": "± 5.995348190127972"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 7373.080280848912,
            "unit": "ns",
            "range": "± 17.84601812496947"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 8377.420806884766,
            "unit": "ns",
            "range": "± 19.3948262832214"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 9515.421600341797,
            "unit": "ns",
            "range": "± 53.384658091723736"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 11208.066676213191,
            "unit": "ns",
            "range": "± 7.933152914887054"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 9218.385725754957,
            "unit": "ns",
            "range": "± 23.359362810895522"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 9985.774641770582,
            "unit": "ns",
            "range": "± 35.78582553083719"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 12164.936065673828,
            "unit": "ns",
            "range": "± 21.171917156183547"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 7360.859629313151,
            "unit": "ns",
            "range": "± 7.7988690724681495"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 118610.67940848214,
            "unit": "ns",
            "range": "± 413.9095591399211"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 41231.81508382162,
            "unit": "ns",
            "range": "± 43.18046183430667"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 39998.96501813616,
            "unit": "ns",
            "range": "± 74.07269302283878"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 45808.33304268973,
            "unit": "ns",
            "range": "± 82.01660906532884"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 66789.23715444711,
            "unit": "ns",
            "range": "± 173.87286431168346"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 95753.60107421875,
            "unit": "ns",
            "range": "± 276.8157489972267"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 42539.25405649038,
            "unit": "ns",
            "range": "± 43.79772754325932"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 41077.57344563802,
            "unit": "ns",
            "range": "± 45.6138574457133"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 43536.334228515625,
            "unit": "ns",
            "range": "± 91.8615125502856"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 62121.677943638395,
            "unit": "ns",
            "range": "± 191.9967890585633"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 52289.59777832031,
            "unit": "ns",
            "range": "± 124.76648080608902"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 9094.728698730469,
            "unit": "ns",
            "range": "± 22.413063339188003"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 58572.37200055803,
            "unit": "ns",
            "range": "± 199.3740625487391"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 45369.365046574516,
            "unit": "ns",
            "range": "± 61.93072284175789"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 43308.509521484375,
            "unit": "ns",
            "range": "± 107.71841281669091"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 96592.34110514323,
            "unit": "ns",
            "range": "± 106.50508973741033"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 44926.15487234933,
            "unit": "ns",
            "range": "± 167.8024072638411"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 42345.64373309795,
            "unit": "ns",
            "range": "± 24.332837875597658"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 46075.99158653846,
            "unit": "ns",
            "range": "± 55.03477350896663"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 58451.32097516741,
            "unit": "ns",
            "range": "± 142.3408579062335"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 85733.41627854567,
            "unit": "ns",
            "range": "± 239.9118655302813"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 45015.32653808594,
            "unit": "ns",
            "range": "± 84.66165612410225"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 35505.212838309155,
            "unit": "ns",
            "range": "± 89.2890102477662"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 47184.493146623885,
            "unit": "ns",
            "range": "± 100.43087751052406"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 62288.983154296875,
            "unit": "ns",
            "range": "± 100.42276310467797"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 51825.47220865885,
            "unit": "ns",
            "range": "± 86.18676985437939"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 9122.64164515904,
            "unit": "ns",
            "range": "± 12.242435457520275"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 50035.73384602865,
            "unit": "ns",
            "range": "± 90.29655737587599"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 45027.16580904447,
            "unit": "ns",
            "range": "± 81.68191272063636"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 44095.44939313616,
            "unit": "ns",
            "range": "± 135.43186706985537"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1f9e51cf689fb94fec629b9081f772de4659966",
          "message": "[Compatibility] Added ZINTER, ZINTERCARD, ZINTERSTORE command (#831)\n\n* Added ZINTER, ZINTERCARD, ZINTERSTORE command\r\n\r\n* Format fix\r\n\r\n* Test fix\r\n\r\n* Added comments and docs\r\n\r\n* Fix magic string\r\n\r\n* Review commands\r\n\r\n* Fixed review comments\r\n\r\n---------\r\n\r\nCo-authored-by: Tal Zaccai <talzacc@microsoft.com>",
          "timestamp": "2024-12-16T15:39:13-08:00",
          "tree_id": "3fdad4f3173b970d1a3410a66f90dcdfd4c6e497",
          "url": "https://github.com/microsoft/garnet/commit/f1f9e51cf689fb94fec629b9081f772de4659966"
        },
        "date": 1734393624614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 98997.95532226562,
            "unit": "ns",
            "range": "± 137.92473179404087"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 10606.321062360492,
            "unit": "ns",
            "range": "± 25.613950183412697"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 7859.610544840495,
            "unit": "ns",
            "range": "± 11.151324023841457"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 8854.041900634766,
            "unit": "ns",
            "range": "± 84.22561566038141"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 11875.072127122145,
            "unit": "ns",
            "range": "± 17.369251474945127"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 16064.143430269682,
            "unit": "ns",
            "range": "± 19.43948792141135"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 7846.562194824219,
            "unit": "ns",
            "range": "± 44.00497285011369"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 7533.05800301688,
            "unit": "ns",
            "range": "± 7.599692568574355"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 8825.804697672525,
            "unit": "ns",
            "range": "± 48.93216676265469"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 9513.483319963727,
            "unit": "ns",
            "range": "± 9.089556469449539"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 12011.215444711539,
            "unit": "ns",
            "range": "± 15.456914028691095"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 9204.119328090123,
            "unit": "ns",
            "range": "± 21.134792620209907"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 10083.800288609096,
            "unit": "ns",
            "range": "± 97.12840613913862"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 12568.708801269531,
            "unit": "ns",
            "range": "± 11.669765754676927"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 7712.427629743303,
            "unit": "ns",
            "range": "± 10.823209452502732"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 113629.2497907366,
            "unit": "ns",
            "range": "± 197.10951450216672"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 42462.036568777905,
            "unit": "ns",
            "range": "± 73.06156855925182"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 42249.21915690104,
            "unit": "ns",
            "range": "± 61.652642878405416"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 49124.755859375,
            "unit": "ns",
            "range": "± 64.13747830867308"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 68026.92993164062,
            "unit": "ns",
            "range": "± 272.4173150756739"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 95938.66821289062,
            "unit": "ns",
            "range": "± 265.98482128459966"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 41262.60925292969,
            "unit": "ns",
            "range": "± 66.55106669048651"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 36244.96547154018,
            "unit": "ns",
            "range": "± 59.04944551839308"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 43064.50758713942,
            "unit": "ns",
            "range": "± 70.92113886581362"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 64103.85306222098,
            "unit": "ns",
            "range": "± 310.72323190294355"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 51437.217610677086,
            "unit": "ns",
            "range": "± 71.65341144245919"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 9452.77372087751,
            "unit": "ns",
            "range": "± 17.859287162487757"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 58351.451416015625,
            "unit": "ns",
            "range": "± 205.2857337774988"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 44428.245326450895,
            "unit": "ns",
            "range": "± 59.48855569188802"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 41485.46578543527,
            "unit": "ns",
            "range": "± 77.13526865690785"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 98328.52870396206,
            "unit": "ns",
            "range": "± 233.09974425947166"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 41976.09395345052,
            "unit": "ns",
            "range": "± 69.6075062039392"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 40787.320181039664,
            "unit": "ns",
            "range": "± 95.39999407031938"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 48785.12174166166,
            "unit": "ns",
            "range": "± 58.578666273842224"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 57564.9911063058,
            "unit": "ns",
            "range": "± 131.9696568535103"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 83412.66741071429,
            "unit": "ns",
            "range": "± 110.65929812638858"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 43654.61918757512,
            "unit": "ns",
            "range": "± 50.937544808571324"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 37045.0205485026,
            "unit": "ns",
            "range": "± 72.193301609512"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 43684.14517916166,
            "unit": "ns",
            "range": "± 76.21778127180875"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 53157.723127092635,
            "unit": "ns",
            "range": "± 134.53213423579922"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 55682.36519949777,
            "unit": "ns",
            "range": "± 123.31350700835536"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 9430.561116536459,
            "unit": "ns",
            "range": "± 36.19242508838143"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 49966.2510172526,
            "unit": "ns",
            "range": "± 149.33097262672803"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 45090.00374930246,
            "unit": "ns",
            "range": "± 63.304758162618846"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 42255.17953725962,
            "unit": "ns",
            "range": "± 62.991088121475094"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pon.vijaynirmal@outlook.com",
            "name": "Vijay Nirmal",
            "username": "Vijay-Nirmal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d965f8ac2afed49be01eddca82a88923aa013f69",
          "message": "[Compatibility] Added ZUNION, ZUNIONSTORE commands (#833)\n\n* Added ZUNION, ZUNIONSTORE commands\r\n\r\n* Format fix\r\n\r\n* Fixed test failure\r\n\r\n* Fixed review commands\r\n\r\n* Build fix\r\n\r\n* Review command fixes\r\n\r\n* Buid fix",
          "timestamp": "2024-12-17T16:54:36-08:00",
          "tree_id": "91931c51f9df7e0404c9bb09d7a7dac5f9c45487",
          "url": "https://github.com/microsoft/garnet/commit/d965f8ac2afed49be01eddca82a88923aa013f69"
        },
        "date": 1734484548286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 98085.19984654018,
            "unit": "ns",
            "range": "± 236.94755900959944"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 10665.278116861979,
            "unit": "ns",
            "range": "± 29.36293007411747"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 8407.979801722935,
            "unit": "ns",
            "range": "± 19.895585091026128"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 8556.588451678936,
            "unit": "ns",
            "range": "± 57.36296564630779"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 12095.51532451923,
            "unit": "ns",
            "range": "± 33.41902607195525"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 13514.143880208334,
            "unit": "ns",
            "range": "± 8.086166368998747"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 8155.329459054129,
            "unit": "ns",
            "range": "± 15.129071618098"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 8240.8935546875,
            "unit": "ns",
            "range": "± 22.21213472419507"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 9509.026285807291,
            "unit": "ns",
            "range": "± 20.546162187203816"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 9909.767259870257,
            "unit": "ns",
            "range": "± 15.413748747799238"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 12120.854010948768,
            "unit": "ns",
            "range": "± 9.305956338906235"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 9119.513346354166,
            "unit": "ns",
            "range": "± 19.95417936502168"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 10417.584287203275,
            "unit": "ns",
            "range": "± 12.974566114765352"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 12697.159220377604,
            "unit": "ns",
            "range": "± 14.972427615467543"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 8051.277821858724,
            "unit": "ns",
            "range": "± 69.72179827671562"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 114663.63612583706,
            "unit": "ns",
            "range": "± 366.598541917189"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 41259.57876352163,
            "unit": "ns",
            "range": "± 84.3439771264454"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 41486.71183268229,
            "unit": "ns",
            "range": "± 78.25306694891727"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 46013.46333821615,
            "unit": "ns",
            "range": "± 90.95067510108387"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 65670.78012319711,
            "unit": "ns",
            "range": "± 252.5775321236399"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 93782.04182942708,
            "unit": "ns",
            "range": "± 361.3743848569065"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 42022.18956580529,
            "unit": "ns",
            "range": "± 97.28579457644815"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 35860.318196614586,
            "unit": "ns",
            "range": "± 73.6395531354412"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 45038.57950846354,
            "unit": "ns",
            "range": "± 95.32234743119346"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 62636.96736653646,
            "unit": "ns",
            "range": "± 274.2690275825931"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 54352.284458705355,
            "unit": "ns",
            "range": "± 129.1540080451235"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 9335.101611797627,
            "unit": "ns",
            "range": "± 25.98194052589114"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 59027.71257672991,
            "unit": "ns",
            "range": "± 238.8896114366696"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 43920.43497721354,
            "unit": "ns",
            "range": "± 123.38470088283609"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 43075.21525065104,
            "unit": "ns",
            "range": "± 100.96309788882112"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 102264.8699079241,
            "unit": "ns",
            "range": "± 225.71177225175646"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 40405.277361188615,
            "unit": "ns",
            "range": "± 107.11307749366046"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 41959.56290108817,
            "unit": "ns",
            "range": "± 84.71927651636378"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 46345.37658691406,
            "unit": "ns",
            "range": "± 100.51124539491938"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 59160.38635253906,
            "unit": "ns",
            "range": "± 80.80509413366077"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 86091.56755719866,
            "unit": "ns",
            "range": "± 165.2503742706162"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 43993.7002999442,
            "unit": "ns",
            "range": "± 87.01846413028657"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 35290.43151855469,
            "unit": "ns",
            "range": "± 42.40885262956623"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 46157.7409010667,
            "unit": "ns",
            "range": "± 84.26982508516075"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 53453.09102376302,
            "unit": "ns",
            "range": "± 146.4418674095216"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 53077.38728841146,
            "unit": "ns",
            "range": "± 63.40831814185243"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 9147.57330758231,
            "unit": "ns",
            "range": "± 17.980197291586066"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 49469.13123497596,
            "unit": "ns",
            "range": "± 90.34305043466013"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 42545.812552315845,
            "unit": "ns",
            "range": "± 65.50508596770956"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 42000.152587890625,
            "unit": "ns",
            "range": "± 71.84541736973968"
          }
        ]
      }
    ],
    "Operations.CustomOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734542964366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: ACL)",
            "value": 61467.48780235877,
            "unit": "ns",
            "range": "± 113.20610174596948"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: ACL)",
            "value": 233711.24735514322,
            "unit": "ns",
            "range": "± 792.870457391839"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: ACL)",
            "value": 117628.67212320963,
            "unit": "ns",
            "range": "± 160.13066414983828"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: ACL)",
            "value": 106933.99930826823,
            "unit": "ns",
            "range": "± 103.69543755478227"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: AOF)",
            "value": 59959.66864013672,
            "unit": "ns",
            "range": "± 366.0217259672439"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: AOF)",
            "value": 246182.64390345983,
            "unit": "ns",
            "range": "± 1297.9701543232768"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: AOF)",
            "value": 133180.9957845052,
            "unit": "ns",
            "range": "± 1453.1406213692837"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: AOF)",
            "value": 133901.82430326022,
            "unit": "ns",
            "range": "± 447.7520637398846"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: None)",
            "value": 57568.12023111979,
            "unit": "ns",
            "range": "± 353.46872649261815"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: None)",
            "value": 233023.1776123047,
            "unit": "ns",
            "range": "± 1395.4221778830902"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: None)",
            "value": 117259.62330729167,
            "unit": "ns",
            "range": "± 613.4535242441883"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: None)",
            "value": 109580.082421875,
            "unit": "ns",
            "range": "± 715.909426800333"
          }
        ]
      }
    ],
    "Operations.CustomOperations (windows-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "e38ef6251a7661d85a2f44ef2cacae48ba4109e3",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back.",
          "timestamp": "2024-12-18T17:22:08Z",
          "url": "https://github.com/microsoft/garnet/commit/e38ef6251a7661d85a2f44ef2cacae48ba4109e3"
        },
        "date": 1734543031685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: ACL)",
            "value": 60095.80993652344,
            "unit": "ns",
            "range": "± 46.30471452555739"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: ACL)",
            "value": 218108.01304408483,
            "unit": "ns",
            "range": "± 480.1081128489583"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: ACL)",
            "value": 131237.5773111979,
            "unit": "ns",
            "range": "± 190.02600670783298"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: ACL)",
            "value": 107308.43872070312,
            "unit": "ns",
            "range": "± 208.4286721938496"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: AOF)",
            "value": 59216.761192908656,
            "unit": "ns",
            "range": "± 104.59957777538581"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: AOF)",
            "value": 236323.0259486607,
            "unit": "ns",
            "range": "± 674.4196182146311"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: AOF)",
            "value": 145062.34654017858,
            "unit": "ns",
            "range": "± 912.522863197535"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: AOF)",
            "value": 130432.7392578125,
            "unit": "ns",
            "range": "± 368.5153047384795"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: None)",
            "value": 58732.29282924107,
            "unit": "ns",
            "range": "± 159.62984081860222"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: None)",
            "value": 215725.96435546875,
            "unit": "ns",
            "range": "± 373.2046249814149"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: None)",
            "value": 128840.74049729567,
            "unit": "ns",
            "range": "± 161.40576054917867"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: None)",
            "value": 106909.36701847956,
            "unit": "ns",
            "range": "± 98.86939425314227"
          }
        ]
      }
    ]
  }
}