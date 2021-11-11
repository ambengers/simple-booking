import Vue from "vue";

// Components
import FormGroup from "@components/FormGroup";
import Modal from "@components/Modal";
import Pagination from "@components/Pagination";
import SelectInput from "@components/SelectInput";
import TextInput from "@components/TextInput";

Vue.component("form-group", FormGroup);
Vue.component("modal", Modal);
Vue.component("pagination", Pagination);
Vue.component("select-input", SelectInput);
Vue.component("text-input", TextInput);

// Layout
import Layout from "@pages/Layout";

Vue.component("layout", Layout);
