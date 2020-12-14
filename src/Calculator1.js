import PD from "probability-distributions";
//mu_eld = mean efficacy lane departure
//mu_pld = mean prevalence lane departure
//mu_pfc = mean prevalence forward collision
//mu_efc = mean efficacy forward collision

//var_eld = variance efficacy lane departure
//var_pld = variance prevalence lane departure
//var_pfc = variance prevalence forward collision
//var_efc = variance efficacy forward collision

const FCAcc = 2175904
const LDAcc = 1452766
const FCDeath = 9660
const LDDeath = 9804

function alpha_beta(mu1, var1){
    var alpha1 = Math.pow(mu1,2) * ((1 - mu1) / Math.pow(var1,2) - 1 / mu1);
    var beta1 = alpha1 * (1 / mu1 - 1);
    return {'alpha': alpha1, 'beta':beta1}
    }

//enter NCND = Number crash or number death
//res_p = prevalence pararms
//res_e = efficacy params
function initial_calcs(NCD, res_p, res_e){
    var a = res_p.map(function (x) {return x * NCD;});
    var b = res_e.map(function (x) {return 1 - x;});
    return {'a':a, 'b':b}
}

//gets distribution given all parameters for one year 
export default function calc_data1(param_dict) {
    const N = 2000; //number monte carlo simulations
    var res_dict = {'lsfc':[], 'cpfc':[], 'lsld':[], 'cpld':[]}
    //efficacy 
    const init_e =  alpha_beta(param_dict['me'], param_dict['ve']);
    //prevalence
    const init_p =  alpha_beta(param_dict['mp'], param_dict['vp']);

        
    //prevalence
    var dist_p = PD.rbeta(N, init_p['alpha'], init_p['beta']); //prevalence distribution
    //efficacy
    var dist_e = PD.rbeta(N, init_e['alpha'], init_e['beta']); //efficacy distribution
    
    //do initial calcs 
    var lsfc_params = initial_calcs(FCDeath, dist_p, dist_e) //lives saved fc
    var cpfc_params = initial_calcs(FCAcc, dist_p, dist_e) //crashed prevented fc
    var lsld_params = initial_calcs(LDDeath, dist_p, dist_e) //lives saved ld
    var cpld_params = initial_calcs(LDAcc, dist_p, dist_e) //crashed prevented ld
    
    for (var k = 0; k < N; k++) {
        res_dict["lsfc"].push(lsfc_params['a'][k] * lsfc_params['b'][k]);
        res_dict["cpfc"].push(cpfc_params['a'][k] * cpfc_params['b'][k]);
        res_dict["lsld"].push(lsld_params['a'][k] * lsld_params['b'][k]);
        res_dict["cpld"].push(cpld_params['a'][k] * cpld_params['b'][k]);
    }
    return res_dict;
}