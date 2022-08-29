/* eslint-disable no-case-declarations */
/* eslint-disable no-var */

export function initSidebarGraphicApp( tid: any, createID: any ){
    var graphic = window.graphic;
    var GraphicObjectProp = window.D2.Core.GraphicObjectProp;
    var GraphicObjectStyle = window.D2.Core.GraphicObjectStyle;
    var multiLineTextPosition = [[300, 100], []];
        switch (tid) {
             
            case 'initialize':
                // 모든 투명도 레이어를 삭제한다.
                var graphicBoard = graphic._graphicBoard;
                const graphicBoardLength = graphicBoard.length;
                for (var i = graphicBoardLength - 1; i >= 0; i--)
                    graphic.removeGraphicBoard(i);
                break;
            case 'create':
                switch (createID) {
                    case 'createMode1':
                        // 투명도 생성 모드 단축기 예제 1 - 드래그 polyline
                        var objProp = new GraphicObjectProp('polyline');
                        var objStyle = new GraphicObjectStyle();
                        objStyle.fill.color[3] = [0];
                        objProp.dragCreating = true;
                        graphic.createMode(objProp, objStyle);
                        break;
                    
                    case 'createMode2':
                        // 투명도 생성 모드 단축기 예제 2 - 드래그, 선 끝모양 polyline
                        var objProp = new GraphicObjectProp('polyline');
                        var objStyle = new GraphicObjectStyle();
                        objStyle.fill.color[3] = [0];
                        objProp.dragCreating = true;
                        objStyle.line.arrow.begin.type = 'arrow';
                        graphic.createMode(objProp, objStyle);
                        break;
                    case 'createMode3':
                        // 투명도 생성 모드 단축기 예제 3 - 드래그, 선 끝모양 polyline
                        var objProp = new GraphicObjectProp('polyline');
                        var objStyle = new GraphicObjectStyle();
                        objStyle.fill.color[3] = [0];
                        objProp.dragCreating = true;
                        objStyle.line.arrow.begin.type = 'arrow';
                        objStyle.line.arrow.end.type = 'triangle';
                        graphic.createMode(objProp, objStyle);
                        break;
                    case 'createMode4':
                        // 투명도 생성 모드 단축기 예제 4 - 선 끝모양 polyline
                        var objProp = new GraphicObjectProp('polyline');
                        var objStyle = new GraphicObjectStyle();
                        objStyle.fill.color[3] = [0];
                        objStyle.line.arrow.begin.type = 'arrow';
                        objStyle.line.arrow.end.type = 'triangle';
                        graphic.createMode(objProp, objStyle);
                        break;
                    case 'createMode5':
                        // 투명도 생성 모드 단축기 예제 5 - 원
                        var objProp = new GraphicObjectProp('ellipse');
                        var objStyle = new GraphicObjectStyle();
                        objProp.sameRatio = true;
                        graphic.createMode(objProp, objStyle);
                        break;
                    case 'createMode6':
                        // 투명도 생성 모드 단축기 예제 6 - 정다각형
                        var objProp = new GraphicObjectProp('regularPolygon');
                        var objStyle = new GraphicObjectStyle();
                        objProp.angleCount = 5;
                        graphic.createMode(objProp, objStyle);
                        break;
                    case 'createMode7':
                        // 투명도 생성 모드 단축기 예제 7 - 작전활동부호 선형(우회)
                        var MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                        var milSymbolObject = MSTacticalLineGraphics.getMSObject('G*T*Y-----****X');
                        graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                        break;
                    case 'createMode8':
                        // 투명도 생성 모드 단축기 예제 8 - 작전활동부호 선형(방위호형)
                        var MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                        var milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*AAA---****X');
                        graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                        break;
                    case 'createMode9':
                        // 투명도 생성 모드 단축기 예제 9 - 작전활동부호 선형(지상조공전진축)
                        var MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                        var milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*OLAGS-****X');
                        graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                        break;
                    case 'createMode10':
                        // 투명도 생성 모드 단축기 예제 10 - 작전활동부호 선형(아군항공전진축)
                        var MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                        var milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*OLAV--****X');
                        graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                        break;
                    case 'createMode11':
                        // 투명도 생성 모드 단축기 예제 11 - 작전활동부호 선형(경계-사단)
                        var MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                        var milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*GLB---****X');
                        milSymbolObject.graphicObjProp.textExt = "Down";
                        milSymbolObject.graphicObjProp.textExt2 = "Up";
                        milSymbolObject.graphicObjProp.textExt4 = "I";
                        console.log(milSymbolObject);
                        graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                        break;
                    case 'createMode12':
                        // 투명도 생성 모드 단축기 예제 12 - 작전활동부호 선형(경계-군단)
                        var MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                        var milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*GLB---****X');
                        milSymbolObject.graphicObjProp.textExt = "123";
                        milSymbolObject.graphicObjProp.textExt2 = "567";
                        milSymbolObject.graphicObjProp.textExt4 = "J";
                        graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                        break;
                    case 'createMode13':
                        // 투명도 생성 모드 단축기 예제 13 - 작전활동부호 면형(공두보)
                        var MSTacticalPolygonGraphics = new window.D2.Core.MSTacticalPolygonGraphics();
                        var milSymbolObject = MSTacticalPolygonGraphics.getMSObject('G*G*SAA---****X');
                        graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                        break;
                    case 'createMode14':
                        // 투명도 생성 모드 단축기 예제 14 - 작전활동부호 선형(엄폐)
                        var MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                        var milSymbolObject = MSTacticalLineGraphics.getMSObject('GFT-UC--------X') // 엄폐;
                        // var milSymbolObject = MSTacticalLineGraphics.getMSObject('GFT-UG--------X') // 경비;
                        // var milSymbolObject = MSTacticalLineGraphics.getMSObject('GFT-UP--------X') // 방호;
                        // var milSymbolObject = MSTacticalLineGraphics.getMSObject('GFT-US--------X') // 차장;
                        graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                        break;
                    case 'createMode15':
                            // 투명도 생성 모드 단축기 예제 15 - 작전활동부호 선형(비행회랑)
                            var MSTacticalLineGraphics = new window.D2.Core.MSTacticalLineGraphics();
                            var milSymbolObject = MSTacticalLineGraphics.getMSObject('G*G*ALC---****X') // 비행회랑;
                            milSymbolObject.graphicObjProp.msTextJSON.AM = 30000;
                            graphic.createMode(milSymbolObject.graphicObjProp, milSymbolObject.graphicObjStyle);
                            break;
                    case 'createMode16':
                        // 투명도 생성 모드 단축기 예제 1 - 드래그 rectangle
                        var objProp = new GraphicObjectProp('rectangle');
                        var objStyle = new GraphicObjectStyle();
                        graphic.createMode(objProp, objStyle);
                        break;
                    case 'createMode17':
                        // 투명도 생성 모드 단축기 예제 1 - 드래그 Arc
                        var objProp = new GraphicObjectProp('arc');
                        var objStyle = new GraphicObjectStyle();
                        objProp.lineType = 1;
                        objProp.fillType = 3;
                        graphic.createMode(objProp, objStyle);
                        break;
                   case 'createMode18':
                        // 투명도 생성 모드 단축기 예제 1 - 드래그 Point
                        var objProp = new GraphicObjectProp('point');
                        var objStyle = new GraphicObjectStyle();
                        objStyle.point.type = 'triangle';
                        graphic.createMode(objProp, objStyle);
                        break;
                    case 'createMode19':
                        // 투명도 생성 모드 단축기 예제 1 - 드래그 Polyline
                        var objProp = new GraphicObjectProp('polyline');
                        var objStyle = new GraphicObjectStyle();
                        objStyle.fill.color[3] = 0;
                        graphic.createMode(objProp, objStyle);
                            break;
                    case 'createMode20':
                     // 투명도 생성 모드 단축기 예제 1 - 드래그 Polygon
                     var objProp = new GraphicObjectProp('polyline');
                     var objStyle = new GraphicObjectStyle();
                     graphic.createMode(objProp, objStyle);
                        break;
         
                    case 'createMode21':
                        // 투명도 생성 모드 단축기 예제 1 - 드래그 Spline
                        var objProp = new GraphicObjectProp('polyline');
                        var objStyle = new GraphicObjectStyle();
                        graphic.createMode(objProp, objStyle);
                        break;
                    
                    case 'createMode22':
                        // 투명도 생성 모드 단축기 예제 1 - 드래그 Closed Spline
                        var objProp = new GraphicObjectProp('polyline');
                        var objStyle = new GraphicObjectStyle();
                        objStyle.fill.color[3] = 0;
                        objProp.lineType = 1;

                        graphic.createMode(objProp, objStyle);
                        break;
                    
                    case 'createMode23':
                        // 투명도 생성 모드 단축기 예제 6 - 정다각형
                        var objProp = new GraphicObjectProp('regularPolygon');
                        var objStyle = new GraphicObjectStyle();
                        objProp.angleCount = 6;
                        graphic.createMode(objProp, objStyle);
                        break;
                    case 'createMode24':
                            var map, text, size, coordinate: any, board, object;
                            var objProp = new GraphicObjectProp('rectangle');
                            var objStyle = new GraphicObjectStyle();
                            board = graphic.getSelectGraphicBoard();
            
                            graphic.selectMode();
                            map = graphic._map;
                            coordinate = [];
                            size = getTextSize(text, objStyle.text.fontSize + "px " + objStyle.text.font);
                            multiLineTextPosition[1][0] = multiLineTextPosition[0][0] + size[0];
                            multiLineTextPosition[1][1] = multiLineTextPosition[0][1] + size[1];
                            window.D2.Core.GraphicUtil.coordinateFromPixel(map, multiLineTextPosition, [0, 0], coordinate);
            
                            objProp.name = 'text';
                            objProp.text = text;
                            objProp.setCoordinate(coordinate);
                            objStyle.line.color[3] = 0;
                            objStyle.fill.color[3] = 0;
            
                            object = board.createObject(objProp, objStyle);
                            object.createFeature(true);
                            // multiLineTextPosition[0][0] = multiLineTextPosition[1][0];
                            multiLineTextPosition[0][1] = multiLineTextPosition[1][1];
                            break;
                    
                }
            }
                    
                // ex) font = "30px Arial"
                function getTextSize(text: any, font: any) {
                    var canvas, ctx:any, paragraph:any, longestWord, textMetrics, width, height;
                    canvas = document.createElement('canvas');
                    ctx = canvas.getContext('2d');
                    if (font != undefined)
                    ctx.font = font;
                    paragraph = text.match(/\n/g);
                    paragraph = paragraph == null ? 1 : paragraph.length + 1;
                    longestWord = getLongestWord(text.split('\n'));
                    // 텍스트 사이즈 가져오기
                    // https://stackoverflow.com/questions/1134586/how-can-you-find-the-height-of-text-on-an-html-canvas
                    textMetrics = ctx.measureText(longestWord);
                    width = textMetrics.width;
                    height = (textMetrics.fontBoundingBoxAscent + textMetrics.fontBoundingBoxDescent) * paragraph;
                    return [width, height];
                    
                    function getLongestWord(arr: string | any[]) {
                        let longestWord = arr[0]
                        for (let i = 1; i < arr.length; i++) {
                            if (longestWord.length < arr[i].length)
                            longestWord = arr[i]
                        }
                        return longestWord;
                    }
                }
            }
            
            