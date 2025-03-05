ServerEvents.tags('item', event =>{
    const mod =[
        /create:/
    ]
    const material = [
        /brass_.*/,
        /zinc_.*/,

    ];
    mod.forEach((mod)=>{
        material.forEach((material)=>{
            event.removeAllTagsFrom(`${mod}${material}`);
        })
    })
    event.removeAllTagsFrom(/create:.*_sheet/)
    event.removeAllTagsFrom(/exdeorum:.*_ore_chunk/)
    event.removeAllTagsFrom(/thermal:.*_plate/)
    event.removeAllTagsFrom(/thermal:.*_coin/)
})