
export function GraphicToolApp( tid: string){
  const graphic = window.graphic;
  const GraphicObjectProp = window.D2.Core.GraphicObjectProp;
  const GraphicObjectStyle = window.D2.Core.GraphicObjectStyle;
  const multiLineTextPosition = [[300, 100], []];
  let graphicBoard;
  let graphicBoardLength;
  let objProp;
  let objStyle;
  let MSTacticalPolygonGraphics,MSTacticalLineGraphics;
  let milSymbolObject;
  let map, text, size, coordinate: any, board, object;
  let canvas, ctx:any, paragraph:any, longestWord, textMetrics, width, height;

    window.eventManager.setMapMode("graphic");
        switch (tid) {
            case "layer":
               // subPopupMenu(thisId);
               // $(this).toggleClass("");
                break;
              case "select":
                //break;
                graphic.muteMode();
                graphic.selectMode();
                break;
              case "point":
                objProp = new GraphicObjectProp("point");
                graphic.createMode(objProp);
                break;
              case "straightLine":
                objProp = new GraphicObjectProp('polyline');
                objStyle = new GraphicObjectStyle();
               objStyle.fill.color[3] = [0];
               objStyle.line.arrow.begin.type = 'arrow';
               objStyle.line.arrow.end.type = 'triangle';
               graphic.createMode(objProp, objStyle);
               break;
              
              case "spline":
                objProp = new GraphicObjectProp("polyline");
                objStyle = new GraphicObjectStyle();
                objStyle.fill.color[3] = [0];
                objProp.lineType = 1;
                graphic.createMode(objProp, objStyle);
                break;
               case "triangle":
                objProp = new GraphicObjectProp("triangle");
                graphic.createMode(objProp);
                break;
              case "text":
                //subPopupMenu(thisId);
                break;
              case "rectangle":
                objProp = new GraphicObjectProp("rectangle");
                graphic.createMode(objProp);
                break;
              case "rectangleround":
                objProp = new GraphicObjectProp("rectangle");
                objProp.radius = 50;
                graphic.createMode(objProp);
                break;
              case "polygon":
                objProp = new GraphicObjectProp("polyline");
                objProp.close = 1;
                graphic.createMode(objProp);
                break;  
              case "BSpline":
                  //subPopupMenu(thisId);
              break;
              case "pentagon":
                objProp = new GraphicObjectProp('regularPolygon');
                objStyle = new GraphicObjectStyle();
               objProp.angleCount = 5;
               graphic.createMode(objProp, objStyle);
               break;            break;
            case "hexagon":
              objProp = new GraphicObjectProp('regularPolygon');
              objStyle = new GraphicObjectStyle();
             objProp.angleCount = 6;
             graphic.createMode(objProp, objStyle);
             break;
            case "circle":
                //subPopupMenu(thisId);
               // 투명도 생성 모드 단축기 예제 5 - 원
               objProp = new GraphicObjectProp('ellipse');
               objStyle = new GraphicObjectStyle();
              graphic.createMode(objProp, objStyle);
              break;
            case "fanShaped":
              objProp = new GraphicObjectProp('arc');
              objStyle = new GraphicObjectStyle();
             objProp.lineType = 1;
             objProp.fillType = 3;
             graphic.createMode(objProp, objStyle);
             break;
            case "arcIcon":
                        // 투명도 생성 모드 단축기 예제 1 - 드래그 Arc
                        objProp = new GraphicObjectProp('arc');
                        objStyle = new GraphicObjectStyle();
                       objProp.lineType = 1;
                       objProp.fillType = 3;
                       graphic.createMode(objProp, objStyle);
                       break;
            case "sector":
              MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
              milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*AAA---****X');
             graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
             break;
            case "forwardAxis":
              MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
              milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*OLAGS-****X');
             graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
             break;
            case "multiPointForwardAxis":
              MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
              milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*AAA---****X');
             graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
             break;
            case "FlightForwradAxis":
                //subPopupMenu(thisId);
                MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*OLAV--****X');
               graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
               break;
            case "combatBoundary":
                //subPopupMenu(thisId);
                MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*GLB---****X');
               milSymbolObject.graphicObjProp.textExt = "Down";
               milSymbolObject.graphicObjProp.textExt2 = "Up";
               milSymbolObject.graphicObjProp.textExt4 = "I";
               console.log(milSymbolObject);
               graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
               break;
            case "image":
                //subPopupMenu(thisId);
            break;
             
              









                }

}
                    
                // ex) font = "30px Arial"
  
            
            
            