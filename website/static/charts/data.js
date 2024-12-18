window.BENCHMARK_DATA = {
  "lastUpdate": 1734548999703,
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
    ]
  }
}