window.BENCHMARK_DATA = {
  "lastUpdate": 1734549443543,
  "repoUrl": "https://github.com/microsoft/garnet",
  "entries": {
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548585151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37204.26223754883,
            "unit": "ns",
            "range": "± 42.50628602366016"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37195.21051534017,
            "unit": "ns",
            "range": "± 35.85922684919816"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32615.426999605617,
            "unit": "ns",
            "range": "± 41.35196247769095"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31502.4585164388,
            "unit": "ns",
            "range": "± 30.872944123482593"
          }
        ]
      }
    ],
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548611124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1807.472878774007,
            "unit": "ns",
            "range": "± 12.261323425955037"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1710.2047669728597,
            "unit": "ns",
            "range": "± 7.839026342071758"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1709.9032917022705,
            "unit": "ns",
            "range": "± 9.736436918112632"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548620970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 179.03324958256312,
            "unit": "ns",
            "range": "± 0.828352181888693"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 326.11962039130077,
            "unit": "ns",
            "range": "± 2.1255854493965756"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 601.9498613993327,
            "unit": "ns",
            "range": "± 5.550078922058537"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2993.6411012502817,
            "unit": "ns",
            "range": "± 19.438797247994145"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548681537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 146174.72288161056,
            "unit": "ns",
            "range": "± 589.1276755266666"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 137300.18728402944,
            "unit": "ns",
            "range": "± 284.3211514917489"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 131741.9134803185,
            "unit": "ns",
            "range": "± 213.54383796921297"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 164891.68854166666,
            "unit": "ns",
            "range": "± 745.47440399047"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 148934.97302246094,
            "unit": "ns",
            "range": "± 1210.5596764719116"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 146977.7321126302,
            "unit": "ns",
            "range": "± 1494.4226821112536"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 151902.14847005208,
            "unit": "ns",
            "range": "± 1294.5354921150272"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 134987.126499721,
            "unit": "ns",
            "range": "± 202.05630073450916"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 133539.30624186198,
            "unit": "ns",
            "range": "± 1738.388872336639"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548685407,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1829.11742074149,
            "unit": "ns",
            "range": "± 2.511234364508957"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1801.737535916842,
            "unit": "ns",
            "range": "± 7.279426926385609"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1894.997160775321,
            "unit": "ns",
            "range": "± 5.575226478188903"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548719761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 16701.7984761556,
            "unit": "ns",
            "range": "± 163.72098983449752"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 15891.28899710519,
            "unit": "ns",
            "range": "± 196.10658526853348"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 15171.395743233817,
            "unit": "ns",
            "range": "± 45.44632546191066"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 14256.917802937825,
            "unit": "ns",
            "range": "± 96.74953243742372"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 118675.66765136718,
            "unit": "ns",
            "range": "± 650.4477138553976"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 20036.34082685198,
            "unit": "ns",
            "range": "± 155.05186448064578"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 20412.54869733538,
            "unit": "ns",
            "range": "± 13.353691290648428"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15875.847577412924,
            "unit": "ns",
            "range": "± 26.838023920920406"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 16084.951038905552,
            "unit": "ns",
            "range": "± 124.81159219630841"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 129591.82360839844,
            "unit": "ns",
            "range": "± 234.23579821700554"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548729260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 119.81186866760254,
            "unit": "ns",
            "range": "± 0.11566749817144543"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 196.3812387906588,
            "unit": "ns",
            "range": "± 0.6869994128610121"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 388.4295503298442,
            "unit": "ns",
            "range": "± 1.5724634235978803"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2195.443369547526,
            "unit": "ns",
            "range": "± 11.012512745330657"
          }
        ]
      }
    ],
    "Operations.CustomOperations (ubuntu-latest  net8.0 Release)": [
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548777711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: ACL)",
            "value": 60851.95166015625,
            "unit": "ns",
            "range": "± 43.405311264326116"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: ACL)",
            "value": 238644.33606770833,
            "unit": "ns",
            "range": "± 1840.2034562660585"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: ACL)",
            "value": 120466.26680814303,
            "unit": "ns",
            "range": "± 271.93295317686466"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: ACL)",
            "value": 109343.1021891276,
            "unit": "ns",
            "range": "± 647.3103823749713"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: AOF)",
            "value": 58776.997458902995,
            "unit": "ns",
            "range": "± 271.7113947658469"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: AOF)",
            "value": 245194.02019391741,
            "unit": "ns",
            "range": "± 732.0541268744395"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: AOF)",
            "value": 128838.41985212054,
            "unit": "ns",
            "range": "± 620.9519166733589"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: AOF)",
            "value": 134387.39528245194,
            "unit": "ns",
            "range": "± 351.8032392948583"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: None)",
            "value": 58806.97982788086,
            "unit": "ns",
            "range": "± 30.613367757758315"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: None)",
            "value": 229721.18980305988,
            "unit": "ns",
            "range": "± 1218.4725335229932"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: None)",
            "value": 118085.5166015625,
            "unit": "ns",
            "range": "± 527.4878520951845"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: None)",
            "value": 109171.39716045673,
            "unit": "ns",
            "range": "± 128.10058136840928"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548782225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 34473.12665666853,
            "unit": "ns",
            "range": "± 41.61107442336036"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 35776.898193359375,
            "unit": "ns",
            "range": "± 55.38825095451808"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31655.297264685996,
            "unit": "ns",
            "range": "± 72.78823883470467"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 29573.548419658953,
            "unit": "ns",
            "range": "± 24.261220481906083"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548828522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 10772.161804199219,
            "unit": "ns",
            "range": "± 99.43190119887453"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 10616.952824910482,
            "unit": "ns",
            "range": "± 78.02883010157875"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 11827.25120340983,
            "unit": "ns",
            "range": "± 80.80933329862336"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 8941.09397301307,
            "unit": "ns",
            "range": "± 44.75998523103583"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9494.538263956705,
            "unit": "ns",
            "range": "± 68.48818097528488"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 136762.45291341146,
            "unit": "ns",
            "range": "± 1142.5869769064084"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 22414.208137512207,
            "unit": "ns",
            "range": "± 30.117170655403957"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 20596.02057800293,
            "unit": "ns",
            "range": "± 162.19039972493374"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 162656.71712239584,
            "unit": "ns",
            "range": "± 1139.9065396186038"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 56144.44925333659,
            "unit": "ns",
            "range": "± 283.6349354151296"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 137532.83987630208,
            "unit": "ns",
            "range": "± 1437.5469290531153"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 23010.426519775392,
            "unit": "ns",
            "range": "± 163.28372520149054"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 19974.752332051594,
            "unit": "ns",
            "range": "± 14.018253300391798"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 161063.59409877233,
            "unit": "ns",
            "range": "± 819.329684788107"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 57132.46539776142,
            "unit": "ns",
            "range": "± 178.63199882595632"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548851050,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: ACL)",
            "value": 117519.54264322917,
            "unit": "ns",
            "range": "± 348.51825788937583"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 106267.5459798177,
            "unit": "ns",
            "range": "± 174.1081657752239"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: ACL)",
            "value": 94922.080078125,
            "unit": "ns",
            "range": "± 93.18774730842905"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: AOF)",
            "value": 133496.1417643229,
            "unit": "ns",
            "range": "± 523.610353935277"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 116392.06909179688,
            "unit": "ns",
            "range": "± 263.9376658112664"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: AOF)",
            "value": 107712.40670340402,
            "unit": "ns",
            "range": "± 262.23428475468523"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.ZAddRem(Params: None)",
            "value": 115240.95505934495,
            "unit": "ns",
            "range": "± 143.14109238197761"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 103728.14636230469,
            "unit": "ns",
            "range": "± 85.60638529231667"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.SAddRem(Params: None)",
            "value": 98547.67008463542,
            "unit": "ns",
            "range": "± 200.96577523733583"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548873621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: DSV)",
            "value": 15978.071594238281,
            "unit": "ns",
            "range": "± 15.34882105484118"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: DSV)",
            "value": 14549.683086688701,
            "unit": "ns",
            "range": "± 18.92358421813575"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: DSV)",
            "value": 14571.570841471354,
            "unit": "ns",
            "range": "± 15.038058023806114"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: DSV)",
            "value": 13503.345380510602,
            "unit": "ns",
            "range": "± 17.63622311738347"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: DSV)",
            "value": 129302.45186941964,
            "unit": "ns",
            "range": "± 186.68797149108596"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Get(Params: None)",
            "value": 19444.72432454427,
            "unit": "ns",
            "range": "± 30.95880431715785"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.Set(Params: None)",
            "value": 18287.313608022836,
            "unit": "ns",
            "range": "± 35.21853279935104"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MGet(Params: None)",
            "value": 15424.971313476562,
            "unit": "ns",
            "range": "± 44.75984598891562"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.MSet(Params: None)",
            "value": 13938.086809430804,
            "unit": "ns",
            "range": "± 26.136717463685137"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterOperations.CTXNSET(Params: None)",
            "value": 143039.24184945913,
            "unit": "ns",
            "range": "± 140.13834168247485"
          }
        ]
      }
    ],
    "Operations.CustomOperations (windows-latest  net8.0 Release)": [
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548924338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: ACL)",
            "value": 59655.50912710337,
            "unit": "ns",
            "range": "± 27.816648251880885"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: ACL)",
            "value": 217768.6802455357,
            "unit": "ns",
            "range": "± 325.5438844113678"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: ACL)",
            "value": 135072.92236328125,
            "unit": "ns",
            "range": "± 126.31320446344041"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: ACL)",
            "value": 110247.48011997768,
            "unit": "ns",
            "range": "± 152.0187062695254"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: AOF)",
            "value": 60922.76752178486,
            "unit": "ns",
            "range": "± 79.87808091319938"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: AOF)",
            "value": 240971.4111328125,
            "unit": "ns",
            "range": "± 740.432843326183"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: AOF)",
            "value": 141836.6633488582,
            "unit": "ns",
            "range": "± 350.9338731023288"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: AOF)",
            "value": 133054.8095703125,
            "unit": "ns",
            "range": "± 486.861733468384"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: None)",
            "value": 61568.51806640625,
            "unit": "ns",
            "range": "± 52.93991565008359"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: None)",
            "value": 220049.0253155048,
            "unit": "ns",
            "range": "± 593.1980384557287"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: None)",
            "value": 132093.46736027644,
            "unit": "ns",
            "range": "± 95.38638709354879"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: None)",
            "value": 107620.09713309152,
            "unit": "ns",
            "range": "± 84.35684109323395"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548983935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: ACL)",
            "value": 16223.508998325893,
            "unit": "ns",
            "range": "± 32.86674810416104"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: ACL)",
            "value": 17673.117065429688,
            "unit": "ns",
            "range": "± 15.052336969240605"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: ACL)",
            "value": 17744.720662434895,
            "unit": "ns",
            "range": "± 22.02659333996834"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: ACL)",
            "value": 8060.057721819197,
            "unit": "ns",
            "range": "± 8.451636802724673"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: ACL)",
            "value": 9392.106424967447,
            "unit": "ns",
            "range": "± 9.799958193763269"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: AOF)",
            "value": 80723.17766462054,
            "unit": "ns",
            "range": "± 272.07125989222766"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: AOF)",
            "value": 28465.16383244441,
            "unit": "ns",
            "range": "± 16.6468094649649"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: AOF)",
            "value": 26387.407684326172,
            "unit": "ns",
            "range": "± 12.050406435199898"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: AOF)",
            "value": 88889.95564778645,
            "unit": "ns",
            "range": "± 478.39112178894106"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: AOF)",
            "value": 45679.70450265067,
            "unit": "ns",
            "range": "± 129.86154679324446"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptLoad(Params: None)",
            "value": 81285.58088030134,
            "unit": "ns",
            "range": "± 241.9425907457609"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsTrue(Params: None)",
            "value": 28376.642063685827,
            "unit": "ns",
            "range": "± 29.082631974965516"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.ScriptExistsFalse(Params: None)",
            "value": 27126.06252034505,
            "unit": "ns",
            "range": "± 81.66699240905723"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.Eval(Params: None)",
            "value": 86165.36539713542,
            "unit": "ns",
            "range": "± 594.6847937664362"
          },
          {
            "name": "BDN.benchmark.Operations.ScriptOperations.EvalSha(Params: None)",
            "value": 45283.268229166664,
            "unit": "ns",
            "range": "± 122.67474688602624"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734549140543,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 14857.679504394531,
            "unit": "ns",
            "range": "± 70.82392169713107"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 19970.429074605305,
            "unit": "ns",
            "range": "± 20.44722324442463"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 18964.64299128606,
            "unit": "ns",
            "range": "± 19.57885136693946"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 20005.842205810546,
            "unit": "ns",
            "range": "± 198.32443376025063"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 16515.942337036133,
            "unit": "ns",
            "range": "± 106.06369327392575"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10654.225868733723,
            "unit": "ns",
            "range": "± 75.94245277873347"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 21845.942722865515,
            "unit": "ns",
            "range": "± 150.7605893839238"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 22347.085447184243,
            "unit": "ns",
            "range": "± 187.22655350081214"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 29734.867743937175,
            "unit": "ns",
            "range": "± 153.2551690290202"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 26464.842413766044,
            "unit": "ns",
            "range": "± 180.60603889581145"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 20707.8145305927,
            "unit": "ns",
            "range": "± 83.66272449456856"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 26694.952505493166,
            "unit": "ns",
            "range": "± 150.7582082837308"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 28142.035452035758,
            "unit": "ns",
            "range": "± 106.13566871256275"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 26732.675650024416,
            "unit": "ns",
            "range": "± 143.0771925400785"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 16732.07763671875,
            "unit": "ns",
            "range": "± 17.500667767835257"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10626.759323120117,
            "unit": "ns",
            "range": "± 78.17977938925955"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 26971.743642171223,
            "unit": "ns",
            "range": "± 27.93888433051089"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 27574.049023946125,
            "unit": "ns",
            "range": "± 26.516227296962864"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 34200.988428751625,
            "unit": "ns",
            "range": "± 151.59895921249688"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 33508.87934657506,
            "unit": "ns",
            "range": "± 106.20201671065625"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 15573.218937174479,
            "unit": "ns",
            "range": "± 66.92865572306287"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19790.09453531901,
            "unit": "ns",
            "range": "± 137.3182491617024"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 20049.81558227539,
            "unit": "ns",
            "range": "± 21.01912582862287"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 20067.41217956543,
            "unit": "ns",
            "range": "± 153.6708525892494"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 16587.28469613882,
            "unit": "ns",
            "range": "± 15.808553183139933"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10823.924110412598,
            "unit": "ns",
            "range": "± 46.308969879436766"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 25377.69698509803,
            "unit": "ns",
            "range": "± 73.9188198472108"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 22420.56814880371,
            "unit": "ns",
            "range": "± 140.2671603222456"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 26733.26094563802,
            "unit": "ns",
            "range": "± 82.10393209006003"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 27292.357912190757,
            "unit": "ns",
            "range": "± 63.52405834530109"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734549273507,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: ACL)",
            "value": 13789.365822928292,
            "unit": "ns",
            "range": "± 12.018131261200637"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: ACL)",
            "value": 19529.567190317008,
            "unit": "ns",
            "range": "± 18.570953001718312"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: ACL)",
            "value": 18062.027413504464,
            "unit": "ns",
            "range": "± 23.458986416703944"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: ACL)",
            "value": 18497.906595865887,
            "unit": "ns",
            "range": "± 27.919136946751227"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: ACL)",
            "value": 15259.197235107422,
            "unit": "ns",
            "range": "± 25.53724292303793"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: ACL)",
            "value": 10791.409410749164,
            "unit": "ns",
            "range": "± 16.38032111509497"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: ACL)",
            "value": 20909.814235142298,
            "unit": "ns",
            "range": "± 24.015092495187442"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: ACL)",
            "value": 20263.842991420202,
            "unit": "ns",
            "range": "± 17.61702739138762"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: ACL)",
            "value": 25351.700846354168,
            "unit": "ns",
            "range": "± 17.834830235533442"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: ACL)",
            "value": 25587.230791364396,
            "unit": "ns",
            "range": "± 67.42535544334518"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: AOF)",
            "value": 20204.032287597656,
            "unit": "ns",
            "range": "± 43.84146917678895"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: AOF)",
            "value": 25175.169677734375,
            "unit": "ns",
            "range": "± 41.6420839146651"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: AOF)",
            "value": 25350.826212565105,
            "unit": "ns",
            "range": "± 52.78771306028317"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: AOF)",
            "value": 25303.12978108724,
            "unit": "ns",
            "range": "± 46.62778740776091"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: AOF)",
            "value": 15370.465087890625,
            "unit": "ns",
            "range": "± 13.079097670526211"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: AOF)",
            "value": 10457.223401750836,
            "unit": "ns",
            "range": "± 21.17444226581748"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: AOF)",
            "value": 25282.07506452288,
            "unit": "ns",
            "range": "± 17.829191697364944"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: AOF)",
            "value": 25672.28742327009,
            "unit": "ns",
            "range": "± 42.101085271673455"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: AOF)",
            "value": 30166.661289760046,
            "unit": "ns",
            "range": "± 153.14406986936635"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: AOF)",
            "value": 33119.562174479164,
            "unit": "ns",
            "range": "± 122.0254676290968"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Set(Params: None)",
            "value": 14420.406668526786,
            "unit": "ns",
            "range": "± 23.3577952553439"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetEx(Params: None)",
            "value": 19722.93724646935,
            "unit": "ns",
            "range": "± 22.67974279034605"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetNx(Params: None)",
            "value": 17617.9679283729,
            "unit": "ns",
            "range": "± 25.574812313247648"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.SetXx(Params: None)",
            "value": 18574.938252766926,
            "unit": "ns",
            "range": "± 20.559973764187017"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetFound(Params: None)",
            "value": 16808.572823660714,
            "unit": "ns",
            "range": "± 11.88900198854243"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.GetNotFound(Params: None)",
            "value": 10764.01857648577,
            "unit": "ns",
            "range": "± 26.75888146789528"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Increment(Params: None)",
            "value": 21449.405125209265,
            "unit": "ns",
            "range": "± 36.896356119611646"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.Decrement(Params: None)",
            "value": 21878.65987141927,
            "unit": "ns",
            "range": "± 44.90989434174296"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.IncrementBy(Params: None)",
            "value": 24871.95375882662,
            "unit": "ns",
            "range": "± 21.941116917045022"
          },
          {
            "name": "BDN.benchmark.Operations.RawStringOperations.DecrementBy(Params: None)",
            "value": 24907.234497070312,
            "unit": "ns",
            "range": "± 24.55844219542999"
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
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734549441359,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: ACL)",
            "value": 131729.29445103236,
            "unit": "ns",
            "range": "± 383.1739276536714"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: ACL)",
            "value": 9508.7572555542,
            "unit": "ns",
            "range": "± 88.07665858327984"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: ACL)",
            "value": 8555.115609305245,
            "unit": "ns",
            "range": "± 70.17843430679716"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: ACL)",
            "value": 11869.580655415853,
            "unit": "ns",
            "range": "± 65.78002338615566"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: ACL)",
            "value": 10475.93295694987,
            "unit": "ns",
            "range": "± 76.29261446297737"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: ACL)",
            "value": 10758.472237220178,
            "unit": "ns",
            "range": "± 24.036556656724965"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: ACL)",
            "value": 8018.455679086538,
            "unit": "ns",
            "range": "± 22.970680520511046"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: ACL)",
            "value": 8038.526634724935,
            "unit": "ns",
            "range": "± 110.44573327158717"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: ACL)",
            "value": 9733.917385864257,
            "unit": "ns",
            "range": "± 42.46658028164753"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: ACL)",
            "value": 10840.02681187221,
            "unit": "ns",
            "range": "± 13.639926387466085"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: ACL)",
            "value": 9085.050739581768,
            "unit": "ns",
            "range": "± 4.793888972237965"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: ACL)",
            "value": 13131.768516540527,
            "unit": "ns",
            "range": "± 19.273622393844708"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: ACL)",
            "value": 10923.321807861328,
            "unit": "ns",
            "range": "± 35.725123390192635"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: ACL)",
            "value": 10985.38942565918,
            "unit": "ns",
            "range": "± 102.59919565520305"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: ACL)",
            "value": 7913.553983561198,
            "unit": "ns",
            "range": "± 73.47911918138061"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: AOF)",
            "value": 150933.66929524738,
            "unit": "ns",
            "range": "± 992.184214744692"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: AOF)",
            "value": 46744.6793355306,
            "unit": "ns",
            "range": "± 270.20183133414224"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: AOF)",
            "value": 45430.872049967445,
            "unit": "ns",
            "range": "± 433.3734766890652"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: AOF)",
            "value": 49665.16425868443,
            "unit": "ns",
            "range": "± 227.87132601166013"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: AOF)",
            "value": 84562.68044026692,
            "unit": "ns",
            "range": "± 497.8196675993658"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: AOF)",
            "value": 110129.32141520182,
            "unit": "ns",
            "range": "± 545.2103891302022"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: AOF)",
            "value": 50319.59249674479,
            "unit": "ns",
            "range": "± 279.55998065930004"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: AOF)",
            "value": 40688.43220872145,
            "unit": "ns",
            "range": "± 57.64348146376089"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: AOF)",
            "value": 50313.87139892578,
            "unit": "ns",
            "range": "± 280.23794343590663"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: AOF)",
            "value": 81645.98751596305,
            "unit": "ns",
            "range": "± 381.8713453747286"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: AOF)",
            "value": 63086.9287882487,
            "unit": "ns",
            "range": "± 182.96307024841465"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: AOF)",
            "value": 13347.830330912273,
            "unit": "ns",
            "range": "± 80.13913331945398"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: AOF)",
            "value": 74811.37762858073,
            "unit": "ns",
            "range": "± 566.9436296863481"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: AOF)",
            "value": 45319.923103841145,
            "unit": "ns",
            "range": "± 235.37465822515168"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: AOF)",
            "value": 46043.6676167806,
            "unit": "ns",
            "range": "± 146.96464101485572"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetDel(Params: None)",
            "value": 132421.44928448016,
            "unit": "ns",
            "range": "± 483.4731964454426"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HExists(Params: None)",
            "value": 46623.997107872594,
            "unit": "ns",
            "range": "± 103.52884104931591"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGet(Params: None)",
            "value": 45575.99699183873,
            "unit": "ns",
            "range": "± 135.61962398643524"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HGetAll(Params: None)",
            "value": 49256.912325345555,
            "unit": "ns",
            "range": "± 85.1615657431938"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrby(Params: None)",
            "value": 76041.99551188151,
            "unit": "ns",
            "range": "± 413.34560677756934"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HIncrbyFloat(Params: None)",
            "value": 102202.76327078683,
            "unit": "ns",
            "range": "± 458.0277923030759"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HKeys(Params: None)",
            "value": 47548.15562086839,
            "unit": "ns",
            "range": "± 83.0312045297957"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HLen(Params: None)",
            "value": 39548.03245762416,
            "unit": "ns",
            "range": "± 120.99348493862276"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMGet(Params: None)",
            "value": 49429.781197684155,
            "unit": "ns",
            "range": "± 218.25907391474206"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HMSet(Params: None)",
            "value": 71033.47249348958,
            "unit": "ns",
            "range": "± 353.4739484638619"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HRandField(Params: None)",
            "value": 57138.23828735352,
            "unit": "ns",
            "range": "± 251.73854654971095"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HScan(Params: None)",
            "value": 13199.579929896763,
            "unit": "ns",
            "range": "± 24.97934069277947"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HSetNx(Params: None)",
            "value": 70910.26748891977,
            "unit": "ns",
            "range": "± 171.30621264121572"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HStrLen(Params: None)",
            "value": 46643.80446573893,
            "unit": "ns",
            "range": "± 258.29614030389604"
          },
          {
            "name": "BDN.benchmark.Operations.HashObjectOperations.HVals(Params: None)",
            "value": 45832.10399373373,
            "unit": "ns",
            "range": "± 255.66514207871882"
          }
        ]
      }
    ]
  }
}