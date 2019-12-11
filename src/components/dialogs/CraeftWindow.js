import React, {Component} from "react";
import PropTypes from "prop-types";

import Slider from "../utility/Slider";
import CraefterDescription from "../craefter/CraefterDescription";
import PreItemDescription from "../item/PreItemDescription";
import {ResourceTypes} from "@craeft/engine/src/data/types";
import Resources from "@craeft/engine/src/resources";

export default class CraeftWindow extends Component {

	static propTypes = {
		craefter: PropTypes.object,
		resources: PropTypes.object,
		itemAdded: PropTypes.func,
	};

	state = {
		resources: new Resources({
			initialResources: 0
		}),
		preItem: null
	};

	constructor(props) {
		super(props);

		this.updateResource = this.updateResource.bind(this);
		this.craeft = this.craeft.bind(this);
	}

	updateResource(
		which,
		value
	) {
		const resources = new Resources()
			.add(this.state.resources);

		// update resources
		resources[which] = value;

		this.setState({
			resources
		}, () => {

			// re evaluate the item
			const preItem = this.props.craefter.evaluateItem({
				resources: this.state.resources
			});

			this.setState({
				preItem
			})
		});
	}

	craeft() {
		if (this.state.resources.sum() > 0) {
			// cräft the item
			const item = this.props.craefter.craeft({
				resources: this.state.resources
			});

			this.props.itemAdded(
				item,
				this.state.resources
			);
		}
	}

	render() {
		return (
			<div>
				<div className='rpgui-container framed craeft-window'>

					<div className={"row"}>
						<strong>Cräft!</strong>
						<hr/>
					</div>

					<CraefterDescription craefter={this.props.craefter}/>

					<div className={"row"}>

						{
							this.props.resources[ResourceTypes.Wood] > 0 ?
								<div>

									{this.state.resources[ResourceTypes.Wood]} x Wood:

									<Slider step={1} min={0}
											max={this.props.resources[ResourceTypes.Wood]}
											defaultValue={this.state.resources[ResourceTypes.Wood]}
											onValueChange={(value) => this.updateResource(
												ResourceTypes.Wood,
												value
											)}/>

								</div> : null
						}

						{
							this.props.resources[ResourceTypes.Metal] > 0 ?
								<div>

									{this.state.resources[ResourceTypes.Metal]} x Metal:

									<Slider step={1} min={0}
											max={this.props.resources[ResourceTypes.Metal]}
											defaultValue={this.state.resources[ResourceTypes.Metal]}
											onValueChange={(value) => this.updateResource(
												ResourceTypes.Metal,
												value
											)}/>

								</div> : null
						}

						{
							this.props.resources[ResourceTypes.Cloth] > 0 ?
								<div>

									{this.state.resources[ResourceTypes.Cloth]} x Cloth:

									<Slider step={1} min={0}
											max={this.props.resources[ResourceTypes.Cloth]}
											defaultValue={this.state.resources[ResourceTypes.Cloth]}
											onValueChange={(value) => this.updateResource(
												ResourceTypes.Cloth,
												value
											)}/>

								</div> : null
						}

						{
							this.props.resources[ResourceTypes.Diamond] > 0 ?
								<div>
									{this.state.resources[ResourceTypes.Diamond]} x Diamond:
									<Slider step={1} min={0}
											max={this.props.resources[ResourceTypes.Diamond]}
											defaultValue={this.state.resources[ResourceTypes.Diamond]}
											onValueChange={(value) => this.updateResource(
												ResourceTypes.Diamond,
												value
											)}/>
								</div> : null
						}

					</div>

					{
						this.state.preItem ?
							<PreItemDescription preItem={this.state.preItem}/>
							: null
					}

					<div className='row'>
						<button onClick={this.craeft}
								className={`rpgui-button is-big ${this.state.resources.sum() < 1 ? "rpgui-disabled" : ""}`}>
							<span>Cräft!</span>
						</button>
					</div>

				</div>
			</div>
		);
	}
}
