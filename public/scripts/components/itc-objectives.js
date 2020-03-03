const objectiveText = {
    kill: "Kill",
    killM: "Kill More",
    obj: "Objective",
    objM: "Objectives More"
}

const objectives = ["kill", "killM", "obj", "objM"];

const ItcObjectivesComponent = {
    data: () => ({ objectives: objectives, objectiveText: objectiveText }),
    props: ["players"],
    template: `
    <div class="row">
        <div class="column" v-for="player in players">
            <h5>Primary Objectives:</h5>
            <div class="ui middle aligned divided list">
                <div class="item" v-for="objective in objectives">
                    <div class="right floated content">
                        <button class="ui button icon mini">
                            <i class="minus icon"></i>
                        </button>
                        {{ player.primaries[objective] }}
                        <button class="ui button icon mini">
                            <i class="plus icon"></i>
                        </button>
                    </div>
                    <div class="middle aligned content">
                        {{ objectiveText[objective] }}
                    </div>
                </div>
            </div>
        </div>
    </div>`
};

export { ItcObjectivesComponent };