(function() {var implementors = {
"mc_commitment_state_diff":[["impl&lt;B: BlockT, C, H&gt; Stream for <a class=\"struct\" href=\"mc_commitment_state_diff/struct.CommitmentStateDiffWorker.html\" title=\"struct mc_commitment_state_diff::CommitmentStateDiffWorker\">CommitmentStateDiffWorker</a>&lt;B, C, H&gt;<span class=\"where fmt-newline\">where\n    C: ProvideRuntimeApi&lt;B&gt; + HeaderBackend&lt;B&gt;,\n    C::Api: StarknetRuntimeApi&lt;B&gt;,\n    H: <a class=\"trait\" href=\"mp_hashers/trait.HasherT.html\" title=\"trait mp_hashers::HasherT\">HasherT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"mc_mapping_sync":[["impl&lt;B: BlockT, C, BE, H&gt; Stream for <a class=\"struct\" href=\"mc_mapping_sync/struct.MappingSyncWorker.html\" title=\"struct mc_mapping_sync::MappingSyncWorker\">MappingSyncWorker</a>&lt;B, C, BE, H&gt;<span class=\"where fmt-newline\">where\n    C: ProvideRuntimeApi&lt;B&gt; + HeaderBackend&lt;B&gt; + StorageProvider&lt;B, BE&gt;,\n    C::Api: <a class=\"trait\" href=\"pallet_starknet_runtime_api/trait.StarknetRuntimeApi.html\" title=\"trait pallet_starknet_runtime_api::StarknetRuntimeApi\">StarknetRuntimeApi</a>&lt;B&gt;,\n    BE: Backend&lt;B&gt;,\n    H: <a class=\"trait\" href=\"mp_hashers/trait.HasherT.html\" title=\"trait mp_hashers::HasherT\">HasherT</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()