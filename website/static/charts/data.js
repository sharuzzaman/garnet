window.BENCHMARK_DATA = {
  "lastUpdate": 1734548695137,
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
    ]
  }
}