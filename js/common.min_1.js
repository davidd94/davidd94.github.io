define(['jquery','domReady!'],function($){'use strict';$('form[data-auto-submit="true"]').submit();$(document).on('submit','form',function(e){var formKeyElement,form=$(e.target),formKey=$('input[name="form_key"]').val();if(formKey&&!form.find('input[name="form_key"]').length&&form[0].method!=='get'){formKeyElement=document.createElement('input');formKeyElement.setAttribute('type','hidden');formKeyElement.setAttribute('name','form_key');formKeyElement.setAttribute('value',formKey);formKeyElement.setAttribute('auto-added-form-key','1');form.get(0).appendChild(formKeyElement);}});});