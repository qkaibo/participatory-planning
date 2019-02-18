
import Scene from "../Scene";
import DrawWidget from "./DrawWidget";

// esri
import Color from "esri/Color";
import {
  declared,
  property,
  subclass,
} from "esri/core/accessorSupport/decorators";
import Graphic from "esri/Graphic";
import { tsx } from "esri/widgets/support/widget";

@subclass("app.draw.CreateArea")
export default class CreateArea extends declared(DrawWidget) {

  public render() {
    return (
      <div>
        <div class="menu">
        <div class="menu-item">
          <button class="btn" onclick={ this._startDrawing.bind(this, "#f0f0f0", "#b2b2b2") }>Create Ground</button>
        </div>
          <div class="menu-item">
            <button class="btn" onclick={ this._startDrawing.bind(this, "#bdce8a", "#93a06c") }>Create Lawn</button>
          </div>
          <div class="menu-item">
            <button class="btn" onclick={ this._startDrawing.bind(this, "#dfca8f", "#dfca8f") }>Create Beach</button>
          </div>
          <div class="menu-item">
            <button class="btn" onclick={ this._startDrawing.bind(this, "#a0b4cf", "#8b9cb3") }>Create Water</button>
          </div>
        </div>
      </div>
    );
  }

  private _startDrawing(color: string, sketchColor: string = color) {
    this.createPolygon(new Color(sketchColor)).then((polygons) => {
      polygons.forEach((geometry) => {
        const building = new Graphic({
          geometry,
          symbol: {
            type: "simple-fill",
            color,
            outline: {
              width: 0,
            },
          },
        } as any);

        this.layer.add(building);
      });
    });
  }

}