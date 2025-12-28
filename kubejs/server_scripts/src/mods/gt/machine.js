ServerEvents.recipes(event =>{
    const ulv = GTValues.ULV;
    const lv = GTValues.LV;
    const mv = GTValues.MV;
    const hv = GTValues.HV;
    const ev = GTValues.EV;
    const iv = GTValues.IV;
    const luv = GTValues.LuV;
    const zpm = GTValues.ZPM;
    const uv = GTValues.UV;
    const uhv = GTValues.UHV;
    const uev = GTValues.UEV;
    const uiv = GTValues.UIV;
    const uxv = GTValues.UXV;
    const opv = GTValues.OpV;
    const max = GTValues.MAX;

    const v = GTValues.V;
    const va = GTValues.VA;
    const vh = GTValues.VH;
    const vha = GTValues.VHA;
    const assembler = event.recipes.gtceu.assembler

    assembler('water_block').itemInputs('4x xycraft_world:xychorium_gem_blue', 'xycraft_machines:machine_base', 'minecraft:iron_bars').inputFluids(Fluid.of("minecraft:water", 4000)).duration(400).EUt(v[lv])
    
    
    assembler('aluminium_firebox_casing')
        .itemInputs('3x gtceu:aluminium_plate', '3x gtceu:aluminium_rod', 'gtceu:aluminium_frame', )
        .itemOutputs('2x galaxy_greg:aluminium_firebox_casing')
        .duration(400)
        .EUt(v[lv])

    assembler('aluminium_gearbox_casing')
        .itemInputs('4x gtceu:aluminium_plate', '2x gtceu:aluminium_gear', 'gtceu:aluminium_frame',)
        .itemOutputs('2x galaxy_greg:aluminium_gearbox_casing')
        .duration(400)
        .circuit(4)
        .EUt(v[lv])

    assembler('aluminium_pipe_casing')
        .itemInputs('4x gtceu:aluminium_plate', '4x gtceu:aluminium_normal_fluid_pipe', 'gtceu:aluminium_frame',)
        .itemOutputs('2x galaxy_greg:aluminium_pipe_casing')
        .duration(400)
        .circuit(6)
        .EUt(v[lv])

    assembler('titanium_pipe_casing')
        .itemInputs('4x gtceu:titanium_plate', '4x gtceu:titanium_normal_fluid_pipe', 'gtceu:titanium_frame',)
        .itemOutputs('2x gtceu:titanium_pipe_casing')
        .duration(400)
        .circuit(6)
        .EUt(v[lv])

    assembler('bronze_pipe_casing')
        .itemInputs('4x gtceu:bronze_plate', '4x gtceu:bronze_normal_fluid_pipe', 'gtceu:bronze_frame',)
        .itemOutputs('2x gtceu:bronze_pipe_casing')
        .duration(400)
        .circuit(6)
        .EUt(v[lv])

    assembler('steel_pipe_casing')
        .itemInputs('4x gtceu:steel_plate', '4x gtceu:steel_normal_fluid_pipe', 'gtceu:steel_frame',)
        .itemOutputs('2x gtceu:steel_pipe_casing')
        .duration(400)
        .circuit(6)
        .EUt(v[lv])

    assembler('tungsten_steel_pipe_casing')
        .itemInputs('4x gtceu:tungsten_steel_plate', '4x gtceu:tungsten_steel_normal_fluid_pipe', 'gtceu:tungsten_steel_frame',)
        .itemOutputs('2x gtceu:tungstensteel_pipe_casing')
        .duration(400)
        .circuit(6)
        .EUt(v[lv])

    assembler('ptfe_pipe_casing')
        .itemInputs('4x gtceu:polytetrafluoroethylene_plate', '4x gtceu:polytetrafluoroethylene_normal_fluid_pipe', 'gtceu:polytetrafluoroethylene_frame',)
        .itemOutputs('2x gtceu:ptfe_pipe_casing')
        .duration(400)
        .circuit(6)
        .EUt(v[lv])

    assembler('ptfe_pipe_casing_from_steel_casing')
        .itemInputs('gtceu:steel_pipe_casing')
        .inputFluids(Fluid.of("gtceu:polytetrafluoroethylene",216))
        .itemOutputs('gtceu:ptfe_pipe_casing')
        .duration(60)
        .circuit(6)
        .EUt(v[lv])

    assembler('polybenzimidazole_pipe_casing')
        .itemInputs('4x gtceu:polybenzimidazole_plate', '4x gtceu:polybenzimidazole_normal_fluid_pipe', 'gtceu:polybenzimidazole_frame',)
        .itemOutputs('2x gtnn:polybenzimidazole_pipe')
        .duration(400)
        .circuit(6)
        .EUt(v[lv])

    assembler('aluminium_casing')
        .itemInputs('6x gtceu:aluminium_plate', 'gtceu:aluminium_frame',)
        .itemOutputs('2x galaxy_greg:aluminium_casing')
        .duration(60)
        .circuit(8)
        .EUt(v[lv])

    assembler('wood_casing')
        .itemInputs('4x gtceu:wrought_iron_plate','2x gtceu:steel_plate', 'gtceu:treated_wood_frame',)
        .itemOutputs('2x galaxy_greg:wood_casing')
        .duration(400)
        .circuit(6)
        .EUt(v[lv])

    assembler('bronze_machine_casing')
        .itemInputs('8x gtceu:bronze_plate')
        .itemOutputs('gtceu:bronze_machine_casing')
        .duration(70)
        .circuit(8)
        .EUt(v[lv])


        
})