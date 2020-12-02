import PD from "probability-distributions";

//efficacy forrvard collision
const init_rfcw = [
  [1.965613327, 5.89683998],
  [2.245376947, 6.070833969],
  [2.971255193, 6.313917285],
  [3.2662386, 6.340345518],
  [3.560465744, 6.329716879],
  [3.995425495, 6.249255261],
  [4.137576093, 6.20636414],
  [4.277836035, 6.155910391],
  [4.551549554, 6.033449409],
  [4.814297264, 5.884141101],
];
//efficacy lane departure 
const init_rld = [
  [4.137576093, 6.20636414],
  [4.415921721, 6.098177615],
  [4.814297264, 5.884141101],
  [5.063810378, 5.710254256],
  [5.408302204, 5.408302204],
  [5.710254256, 5.063810378],
  [5.884141101, 4.814297264],
  [6.033449409, 4.551549554],
  [5.710254256, 5.326512342],
[5.962009371, 5.238560527],

];

//prevalence lane departure
const init_pld = [
  [71.56875,405.55625],
[48.545,206.955],
[18,57],
[16.02091837,43.31581633],
[20.99591837,44.61632653],
[30.18996063,51.40452756],
[51.68741758,68.51587912],
[35.36989796,39.88520408],
[34.62405325,30.70434911],
[36.18130178,28.42816568],

];

//prevalence forward collision
const init_pfcw = [
  [11.325,64.175],
[10.17098425,43.36051181],
[13.15669291,46.64645669],
[20.58333333,58.58333333],
[64.96,138.04],
[34.2,60.8],
[72.75483607,104.6959836],
[66.375,81.125],
[78.6838,69.7762],
[131.8775,95.4975],
];

export default function calc_data(ND15,NC15) {
  var N = 1000;
  var dict = { lsl: [], lsf: [], pcl: [], pcf: [] };
  for (var i = 0; i < 10; i++) {
    var res_pld = PD.rbeta(N, init_pld[i][0], init_pld[i][1]);
    var res_pfcw = PD.rbeta(N, init_pfcw[i][0], init_pfcw[i][1]);
    var res_rld = PD.rbeta(N, init_rld[i][0], init_rld[i][1]);
    var res_rfcw = PD.rbeta(N, init_rfcw[i][0], init_rfcw[i][1]);

    var lsfa = res_pfcw.map(function (x) {
      return x * ND15;
    });
    var lsfb = res_rfcw.map(function (x) {
      return 1 - x;
    });

    var lsla = res_pld.map(function (x) {
      return x * ND15;
    });
    var lslb = res_rld.map(function (x) {
      return 1 - x;
    });

    var pfca = res_pfcw.map(function (x) {
      return x * NC15;
    });
    var pfcb = res_rfcw.map(function (x) {
      return 1 - x;
    });

    var pcla = res_pld.map(function (x) {
      return x * NC15;
    });
    var pclb = res_rld.map(function (x) {
      return 1 - x;
    });

    var lsf_1 = [];
    var lsl_1 = [];
    var pfc_1 = [];
    var pcl_1 = [];

    for (var k = 0; k < N; k++) {
      lsf_1.push(lsfa[k] * lsfb[k]);
      lsl_1.push(lsla[k] * lslb[k]);
      pfc_1.push(pfca[k] * pfcb[k]);
      pcl_1.push(pcla[k] * pclb[k]);
    }
    dict["lsf"].push(lsf_1);
    dict["lsl"].push(lsl_1);
    dict["pcf"].push(pfc_1);
    dict["pcl"].push(pcl_1);
  }
  return dict;
};

